import nodemailer from 'nodemailer'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const RECIPIENTS = {
  careers: 'info@pathfoundbiogas.com',
  contact: 'info@omegainfram.com',
  csr: 'csr@omegagroup.in',
}

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
      if (body.length > 200_000) {
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

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return json(res, 405, { ok: false, error: 'Method not allowed' })
  }

  const smtpHost = process.env.SMTP_HOST
  const smtpPort = Number(process.env.SMTP_PORT || 587)
  const smtpUser = process.env.SMTP_USER
  const smtpPassword = process.env.SMTP_PASSWORD
  const smtpFrom = process.env.SMTP_FROM || smtpUser

  if (!smtpHost || !smtpUser || !smtpPassword) {
    return json(res, 500, {
      ok: false,
      error: 'Email service is not configured. Set SMTP_HOST, SMTP_USER, and SMTP_PASSWORD.',
    })
  }

  let body
  try {
    body = await parseBody(req)
  } catch (error) {
    return json(res, 400, { ok: false, error: error instanceof Error ? error.message : 'Invalid request' })
  }

  // Honeypot: real visitors never fill this hidden field, bots usually do.
  if (String(body.company || '').trim()) {
    return json(res, 200, { ok: true })
  }

  const formType = RECIPIENTS[body.formType] ? body.formType : null
  const name = String(body.name || '').trim()
  const email = String(body.email || '').trim()
  const phone = String(body.phone || '').trim()
  const message = String(body.message || '').trim()
  const projectType = String(body.projectType || '').trim()

  if (!formType) {
    return json(res, 400, { ok: false, error: 'Invalid form type.' })
  }
  if (!name || !email || !message) {
    return json(res, 400, { ok: false, error: 'Name, email, and message are required.' })
  }
  if (!EMAIL_REGEX.test(email)) {
    return json(res, 400, { ok: false, error: 'Enter a valid email address.' })
  }

  const recipient = RECIPIENTS[formType]
  const subjectByType = {
    careers: `New Careers Enquiry from ${name} | Omega Group`,
    csr: `New CSR Enquiry from ${name} | Omega Group`,
    contact: `New Project Enquiry from ${name} | Omega Group`,
  }
  const subject = subjectByType[formType]

  const detailRows = [
    ['Name', name],
    ['Email', email],
    phone ? ['Phone', phone] : null,
    projectType ? ['Project Type', projectType] : null,
  ].filter(Boolean)

  const textBody = [
    ...detailRows.map(([label, value]) => `${label}: ${value}`),
    '',
    'Message:',
    message,
  ].join('\n')

  const htmlBody = `
    <div>
      ${detailRows.map(([label, value]) => `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</p>`).join('')}
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
    </div>
  `

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: process.env.SMTP_SECURE === 'true' || smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPassword },
    })

    await transporter.sendMail({
      from: smtpFrom,
      to: recipient,
      replyTo: email,
      subject,
      text: textBody,
      html: htmlBody,
    })

    return json(res, 200, { ok: true })
  } catch (error) {
    return json(res, 500, {
      ok: false,
      error: error instanceof Error ? error.message : 'Failed to send email.',
    })
  }
}
