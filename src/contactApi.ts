export type EnquiryFormType = 'careers' | 'contact' | 'csr'

export type EnquiryPayload = {
  formType: EnquiryFormType
  name: string
  email: string
  phone?: string
  message: string
  projectType?: string
  /** Honeypot field — must stay empty; only bots tend to fill it in. */
  company?: string
}

export async function submitEnquiry(payload: EnquiryPayload): Promise<{ ok: boolean; error?: string }> {
  try {
    const response = await fetch('/api/contact/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    const data = await response.json().catch(() => ({}))
    if (!response.ok || !data.ok) {
      return { ok: false, error: data.error || 'Something went wrong. Please try again.' }
    }
    return { ok: true }
  } catch {
    return { ok: false, error: 'Network error. Please try again.' }
  }
}
