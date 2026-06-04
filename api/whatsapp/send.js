const GRAPH_API_VERSION = 'v20.0'
const VALID_CATEGORIES = new Set(['Vendor', 'Investor', 'Party', 'Client', 'Staff', 'Partner', 'Other'])
const PHONE_REGEX = /^\+[1-9]\d{7,14}$/

function json(res, status, data) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(data))
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = ''
    req.on('data', (chunk) => {
      body += chunk
      if (body.length > 1_000_000) {
        reject(new Error('Request body too large'))
        req.destroy()
      }
    })
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {})
      } catch {
        reject(new Error('Invalid JSON request body'))
      }
    })
    req.on('error', reject)
  })
}

function normalizeContact(contact) {
  const phone = String(contact?.phoneNumber || contact?.mobile || '').trim()
  const category = String(contact?.category || 'Other').trim()
  return {
    name: String(contact?.name || 'Business Contact').trim(),
    phoneNumber: phone.startsWith('+') ? phone : `+${phone}`,
    category: VALID_CATEGORIES.has(category) ? category : 'Other',
    companyName: String(contact?.companyName || '').trim(),
    location: String(contact?.location || '').trim(),
  }
}

function buildTextPayload(phoneNumber, message, link) {
  const text = [message, link].filter(Boolean).join('\n\n')
  return {
    messaging_product: 'whatsapp',
    recipient_type: 'individual',
    to: phoneNumber.replace(/^\+/, ''),
    type: 'text',
    text: {
      preview_url: Boolean(link),
      body: text,
    },
  }
}

function buildTemplatePayload(phoneNumber, templateName, message, link) {
  const components = []
  const parameters = []

  if (message) {
    parameters.push({ type: 'text', text: message.slice(0, 1024) })
  }

  if (link) {
    parameters.push({ type: 'text', text: link.slice(0, 1024) })
  }

  if (parameters.length > 0) {
    components.push({
      type: 'body',
      parameters,
    })
  }

  return {
    messaging_product: 'whatsapp',
    recipient_type: 'individual',
    to: phoneNumber.replace(/^\+/, ''),
    type: 'template',
    template: {
      name: templateName,
      language: {
        code: 'en_US',
      },
      ...(components.length > 0 ? { components } : {}),
    },
  }
}

async function sendWhatsAppMessage({ contact, message, templateName, link, accessToken, phoneNumberId }) {
  const payload = templateName
    ? buildTemplatePayload(contact.phoneNumber, templateName, message, link)
    : buildTextPayload(contact.phoneNumber, message, link)

  const response = await fetch(`https://graph.facebook.com/${GRAPH_API_VERSION}/${phoneNumberId}/messages`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const responseBody = await response.json().catch(() => ({}))

  return {
    recipientName: contact.name,
    phoneNumber: contact.phoneNumber,
    category: contact.category,
    status: response.ok ? 'sent' : 'failed',
    dateTime: new Date().toISOString(),
    apiResponse: responseBody,
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return json(res, 405, { error: 'Method not allowed' })
  }

  const accessToken = process.env.WHATSAPP_ACCESS_TOKEN
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID
  const adminToken = process.env.WHATSAPP_ADMIN_TOKEN || process.env.WHATSAPP_VERIFY_TOKEN
  const requestAdminToken = req.headers['x-admin-token']

  if (!accessToken || !phoneNumberId) {
    return json(res, 500, {
      error: 'WhatsApp Cloud API is not configured. Set WHATSAPP_ACCESS_TOKEN and WHATSAPP_PHONE_NUMBER_ID.',
    })
  }

  if (!adminToken || requestAdminToken !== adminToken) {
    return json(res, 401, { error: 'Unauthorized admin request' })
  }

  try {
    const body = await parseBody(req)
    const contacts = Array.isArray(body.contacts) ? body.contacts.map(normalizeContact) : []
    const message = String(body.message || '').trim()
    const templateName = String(body.templateName || '').trim()
    const link = String(body.link || '').trim()

    if (contacts.length === 0) {
      return json(res, 400, { error: 'At least one contact is required.' })
    }

    if (!message && !templateName) {
      return json(res, 400, { error: 'Message body or approved template name is required.' })
    }

    const invalidContacts = contacts.filter((contact) => !PHONE_REGEX.test(contact.phoneNumber))
    if (invalidContacts.length > 0) {
      return json(res, 400, {
        error: 'Invalid mobile number format. Use country code format such as +919999999999.',
        invalidContacts,
      })
    }

    const results = []
    for (const contact of contacts) {
      try {
        results.push(await sendWhatsAppMessage({ contact, message, templateName, link, accessToken, phoneNumberId }))
      } catch (error) {
        results.push({
          recipientName: contact.name,
          phoneNumber: contact.phoneNumber,
          category: contact.category,
          status: 'failed',
          dateTime: new Date().toISOString(),
          apiResponse: { error: error instanceof Error ? error.message : 'Unknown WhatsApp API error' },
        })
      }
    }

    return json(res, 200, {
      message: 'WhatsApp message processing completed.',
      results,
    })
  } catch (error) {
    return json(res, 400, { error: error instanceof Error ? error.message : 'Invalid request' })
  }
}
