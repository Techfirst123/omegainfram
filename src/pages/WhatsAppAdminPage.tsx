import React from 'react'
import {
  Bell,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Edit3,
  Link as LinkIcon,
  Megaphone,
  MessageSquareText,
  Plus,
  Save,
  Send,
  Trash2,
  Users,
  XCircle,
} from 'lucide-react'

type ContactCategory = 'Vendor' | 'Investor' | 'Party' | 'Client' | 'Staff' | 'Partner' | 'Other'
type ContactStatus = 'Active' | 'Inactive'
type MessageStatus = 'sent' | 'failed' | 'pending'

type BusinessContact = {
  id: string
  name: string
  phoneNumber: string
  category: ContactCategory
  companyName: string
  location: string
  status: ContactStatus
}

type MessageLog = {
  id: string
  recipientName: string
  phoneNumber: string
  category: ContactCategory
  messageContent: string
  status: MessageStatus
  dateTime: string
  apiResponse: unknown
}

type ComposerState = {
  title: string
  body: string
  selectedCategories: ContactCategory[]
  selectedContactIds: string[]
  templateName: string
  link: string
}

const categories: ContactCategory[] = ['Vendor', 'Investor', 'Party', 'Client', 'Staff', 'Partner', 'Other']

const templateOptions = [
  { label: 'Normal Text Message', value: '' },
  { label: 'Project Update', value: 'project_update' },
  { label: 'Vendor Work Update', value: 'vendor_work_update' },
  { label: 'Investor Update', value: 'investor_update' },
  { label: 'Payment Reminder', value: 'payment_reminder' },
  { label: 'Meeting Notification', value: 'meeting_notification' },
  { label: 'General Announcement', value: 'general_announcement' },
]

const seedContacts: BusinessContact[] = [
  {
    id: 'seed-vendor',
    name: 'Vendor Contact',
    phoneNumber: '+919999999999',
    category: 'Vendor',
    companyName: 'Omega Vendor Network',
    location: 'New Delhi',
    status: 'Active',
  },
  {
    id: 'seed-investor',
    name: 'Investor Desk',
    phoneNumber: '+919888888888',
    category: 'Investor',
    companyName: 'Omega Group',
    location: 'India',
    status: 'Active',
  },
]

const blankContact: BusinessContact = {
  id: '',
  name: '',
  phoneNumber: '+91',
  category: 'Client',
  companyName: '',
  location: '',
  status: 'Active',
}

const blankComposer: ComposerState = {
  title: '',
  body: '',
  selectedCategories: [],
  selectedContactIds: [],
  templateName: '',
  link: '',
}

function readStored<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback
  try {
    const stored = window.localStorage.getItem(key)
    return stored ? JSON.parse(stored) as T : fallback
  } catch {
    return fallback
  }
}

function writeStored<T>(key: string, value: T) {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(key, JSON.stringify(value))
}

function isValidPhoneNumber(phoneNumber: string) {
  return /^\+[1-9]\d{7,14}$/.test(phoneNumber.trim())
}

function StatusBadge({ status }: { status: MessageStatus | ContactStatus }) {
  const style = status === 'sent' || status === 'Active'
    ? 'bg-emerald-50 text-emerald-700 ring-emerald-200'
    : status === 'pending'
      ? 'bg-amber-50 text-amber-700 ring-amber-200'
      : 'bg-red-50 text-red-700 ring-red-200'

  return <span className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ring-1 ${style}`}>{status}</span>
}

function getApiError(payload: unknown) {
  if (!payload || typeof payload !== 'object') return ''
  const data = payload as { error?: string; message?: string }
  return data.error || data.message || ''
}

export default function WhatsAppAdminPage() {
  const [contacts, setContacts] = React.useState<BusinessContact[]>(() => readStored('omega-whatsapp-contacts', seedContacts))
  const [logs, setLogs] = React.useState<MessageLog[]>(() => readStored('omega-whatsapp-logs', []))
  const [drafts, setDrafts] = React.useState<ComposerState[]>(() => readStored('omega-whatsapp-drafts', []))
  const [contactForm, setContactForm] = React.useState<BusinessContact>(blankContact)
  const [editingContactId, setEditingContactId] = React.useState<string | null>(null)
  const [categoryFilter, setCategoryFilter] = React.useState<ContactCategory | 'All'>('All')
  const [composer, setComposer] = React.useState<ComposerState>(blankComposer)
  const [adminToken, setAdminToken] = React.useState(() => readStored('omega-whatsapp-admin-token', ''))
  const [sendStatus, setSendStatus] = React.useState('')
  const [isSending, setIsSending] = React.useState(false)

  React.useEffect(() => writeStored('omega-whatsapp-contacts', contacts), [contacts])
  React.useEffect(() => writeStored('omega-whatsapp-logs', logs), [logs])
  React.useEffect(() => writeStored('omega-whatsapp-drafts', drafts), [drafts])
  React.useEffect(() => writeStored('omega-whatsapp-admin-token', adminToken), [adminToken])

  const filteredContacts = contacts.filter((contact) => categoryFilter === 'All' || contact.category === categoryFilter)
  const selectedContacts = contacts.filter((contact) => {
    const selectedByCategory = composer.selectedCategories.includes(contact.category)
    const selectedIndividually = composer.selectedContactIds.includes(contact.id)
    return contact.status === 'Active' && (selectedByCategory || selectedIndividually)
  })

  const selectedContactsDeduped = Array.from(new Map(selectedContacts.map((contact) => [contact.id, contact])).values())

  function resetContactForm() {
    setContactForm(blankContact)
    setEditingContactId(null)
  }

  function saveContact(event: React.FormEvent) {
    event.preventDefault()
    const normalized = {
      ...contactForm,
      id: editingContactId || crypto.randomUUID(),
      phoneNumber: contactForm.phoneNumber.trim(),
      name: contactForm.name.trim(),
      companyName: contactForm.companyName.trim(),
      location: contactForm.location.trim(),
    }

    if (!normalized.name || !isValidPhoneNumber(normalized.phoneNumber)) {
      setSendStatus('Please enter a contact name and mobile number in country-code format, e.g. +919999999999.')
      return
    }

    setContacts((current) => {
      if (editingContactId) {
        return current.map((contact) => contact.id === editingContactId ? normalized : contact)
      }
      return [normalized, ...current]
    })
    resetContactForm()
    setSendStatus('Contact saved.')
  }

  function editContact(contact: BusinessContact) {
    setContactForm(contact)
    setEditingContactId(contact.id)
  }

  function deleteContact(id: string) {
    setContacts((current) => current.filter((contact) => contact.id !== id))
    setComposer((current) => ({
      ...current,
      selectedContactIds: current.selectedContactIds.filter((contactId) => contactId !== id),
    }))
  }

  function toggleCategory(category: ContactCategory) {
    setComposer((current) => ({
      ...current,
      selectedCategories: current.selectedCategories.includes(category)
        ? current.selectedCategories.filter((item) => item !== category)
        : [...current.selectedCategories, category],
    }))
  }

  function toggleContact(id: string) {
    setComposer((current) => ({
      ...current,
      selectedContactIds: current.selectedContactIds.includes(id)
        ? current.selectedContactIds.filter((item) => item !== id)
        : [...current.selectedContactIds, id],
    }))
  }

  function saveDraft() {
    if (!composer.title && !composer.body) {
      setSendStatus('Add a title or message before saving a draft.')
      return
    }
    setDrafts((current) => [composer, ...current].slice(0, 10))
    setSendStatus('Draft saved.')
  }

  async function sendMessage() {
    setSendStatus('')
    if (!adminToken) {
      setSendStatus('Enter the admin send token before sending.')
      return
    }
    if (selectedContactsDeduped.length === 0) {
      setSendStatus('Select at least one active contact or category.')
      return
    }
    if (!composer.body && !composer.templateName) {
      setSendStatus('Add a message body or select an approved template.')
      return
    }

    const invalidContacts = selectedContactsDeduped.filter((contact) => !isValidPhoneNumber(contact.phoneNumber))
    if (invalidContacts.length > 0) {
      setSendStatus(`Invalid number format for: ${invalidContacts.map((contact) => contact.name).join(', ')}`)
      return
    }

    const messageContent = [composer.title, composer.body, composer.link].filter(Boolean).join('\n\n')
    const pendingLogs: MessageLog[] = selectedContactsDeduped.map((contact) => ({
      id: crypto.randomUUID(),
      recipientName: contact.name,
      phoneNumber: contact.phoneNumber,
      category: contact.category,
      messageContent,
      status: 'pending',
      dateTime: new Date().toISOString(),
      apiResponse: { message: 'Request queued from admin dashboard' },
    }))

    setLogs((current) => [...pendingLogs, ...current])
    setIsSending(true)

    try {
      const response = await fetch('/api/whatsapp/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-token': adminToken,
        },
        body: JSON.stringify({
          contacts: selectedContactsDeduped,
          message: composer.body,
          templateName: composer.templateName,
          link: composer.link,
        }),
      })

      const payload = await response.json()
      if (!response.ok) {
        throw new Error(payload.error || 'WhatsApp API request failed')
      }

      const resultLogs: MessageLog[] = payload.results.map((result: {
        recipientName: string
        phoneNumber: string
        category: ContactCategory
        status: MessageStatus
        dateTime: string
        apiResponse: unknown
      }) => ({
        id: crypto.randomUUID(),
        recipientName: result.recipientName,
        phoneNumber: result.phoneNumber,
        category: result.category,
        messageContent,
        status: result.status,
        dateTime: result.dateTime,
        apiResponse: result.apiResponse,
      }))

      setLogs((current) => [...resultLogs, ...current.filter((log) => !pendingLogs.some((pending) => pending.id === log.id))])
      setSendStatus('WhatsApp send request completed.')
    } catch (error) {
      setLogs((current) => current.map((log) => pendingLogs.some((pending) => pending.id === log.id)
        ? { ...log, status: 'failed', apiResponse: { error: error instanceof Error ? error.message : 'Unknown send error' } }
        : log))
      setSendStatus(error instanceof Error ? error.message : 'Unable to send WhatsApp message.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 pt-[72px] text-slate-700">
      <section className="bg-[#0d3b66] px-5 py-12 text-white">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_0.42fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-300">Omega Group Admin</p>
            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-normal text-white md:text-5xl">
              WhatsApp Business Activity Dashboard
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/78">
              Push recent activity updates, project alerts, payment reminders, meeting notifications, and announcements
              to vendors, investors, parties, clients, staff, partners, and business contacts.
            </p>
          </div>
          <div className="rounded-lg bg-white/10 p-5 ring-1 ring-white/15">
            <label className="text-sm font-bold text-white" htmlFor="admin-token">Admin Send Token</label>
            <input
              id="admin-token"
              type="password"
              value={adminToken}
              onChange={(event) => setAdminToken(event.target.value)}
              placeholder="Stored only in this browser"
              className="mt-2 w-full rounded-md border border-white/20 bg-white px-3 py-3 text-slate-950 outline-none focus:ring-4 focus:ring-emerald-200"
            />
            <p className="mt-2 text-xs leading-5 text-white/66">Matches WHATSAPP_ADMIN_TOKEN or WHATSAPP_VERIFY_TOKEN on the backend.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-8 xl:grid-cols-[0.92fr_1.08fr]">
        <div className="space-y-6">
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#0a84ff]/10 text-[#0a84ff]">
                <Users size={22} aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-normal text-slate-950">Contact Management</h2>
                <p className="text-sm text-slate-500">Add, edit, delete, filter, and select contacts.</p>
              </div>
            </div>

            <form className="mt-5 grid gap-4" onSubmit={saveContact}>
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="rounded-md border border-slate-200 px-3 py-3 outline-none focus:ring-4 focus:ring-[#0a84ff]/15" placeholder="Name" value={contactForm.name} onChange={(event) => setContactForm({ ...contactForm, name: event.target.value })} />
                <input className="rounded-md border border-slate-200 px-3 py-3 outline-none focus:ring-4 focus:ring-[#0a84ff]/15" placeholder="+919999999999" value={contactForm.phoneNumber} onChange={(event) => setContactForm({ ...contactForm, phoneNumber: event.target.value })} />
                <select className="rounded-md border border-slate-200 px-3 py-3 outline-none focus:ring-4 focus:ring-[#0a84ff]/15" value={contactForm.category} onChange={(event) => setContactForm({ ...contactForm, category: event.target.value as ContactCategory })}>
                  {categories.map((category) => <option key={category}>{category}</option>)}
                </select>
                <select className="rounded-md border border-slate-200 px-3 py-3 outline-none focus:ring-4 focus:ring-[#0a84ff]/15" value={contactForm.status} onChange={(event) => setContactForm({ ...contactForm, status: event.target.value as ContactStatus })}>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
                <input className="rounded-md border border-slate-200 px-3 py-3 outline-none focus:ring-4 focus:ring-[#0a84ff]/15" placeholder="Company Name" value={contactForm.companyName} onChange={(event) => setContactForm({ ...contactForm, companyName: event.target.value })} />
                <input className="rounded-md border border-slate-200 px-3 py-3 outline-none focus:ring-4 focus:ring-[#0a84ff]/15" placeholder="Location" value={contactForm.location} onChange={(event) => setContactForm({ ...contactForm, location: event.target.value })} />
              </div>
              <div className="flex flex-wrap gap-3">
                <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-[#0a84ff] px-4 py-3 text-sm font-bold text-white hover:bg-[#086ed3]">
                  <Plus size={17} aria-hidden="true" />
                  {editingContactId ? 'Update Contact' : 'Add Contact'}
                </button>
                {editingContactId ? (
                  <button type="button" onClick={resetContactForm} className="rounded-md border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50">Cancel Edit</button>
                ) : null}
              </div>
            </form>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-xl font-bold tracking-normal text-slate-950">Contact List</h2>
              <select className="rounded-md border border-slate-200 px-3 py-2 text-sm" value={categoryFilter} onChange={(event) => setCategoryFilter(event.target.value as ContactCategory | 'All')}>
                <option>All</option>
                {categories.map((category) => <option key={category}>{category}</option>)}
              </select>
            </div>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[760px] text-left text-sm">
                <thead className="bg-slate-50 text-xs uppercase tracking-[0.12em] text-slate-500">
                  <tr>
                    <th className="px-3 py-3">Select</th>
                    <th className="px-3 py-3">Name</th>
                    <th className="px-3 py-3">Mobile</th>
                    <th className="px-3 py-3">Category</th>
                    <th className="px-3 py-3">Company</th>
                    <th className="px-3 py-3">Location</th>
                    <th className="px-3 py-3">Status</th>
                    <th className="px-3 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredContacts.map((contact) => (
                    <tr key={contact.id}>
                      <td className="px-3 py-3">
                        <input type="checkbox" checked={composer.selectedContactIds.includes(contact.id)} onChange={() => toggleContact(contact.id)} aria-label={`Select ${contact.name}`} />
                      </td>
                      <td className="px-3 py-3 font-semibold text-slate-950">{contact.name}</td>
                      <td className="px-3 py-3">{contact.phoneNumber}</td>
                      <td className="px-3 py-3">{contact.category}</td>
                      <td className="px-3 py-3">{contact.companyName || '-'}</td>
                      <td className="px-3 py-3">{contact.location || '-'}</td>
                      <td className="px-3 py-3"><StatusBadge status={contact.status} /></td>
                      <td className="px-3 py-3">
                        <div className="flex gap-2">
                          <button type="button" className="rounded-md border border-slate-200 p-2 text-[#0a84ff]" onClick={() => editContact(contact)} aria-label={`Edit ${contact.name}`}>
                            <Edit3 size={16} aria-hidden="true" />
                          </button>
                          <button type="button" className="rounded-md border border-slate-200 p-2 text-red-600" onClick={() => deleteContact(contact.id)} aria-label={`Delete ${contact.name}`}>
                            <Trash2 size={16} aria-hidden="true" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-emerald-50 text-emerald-700">
                <MessageSquareText size={22} aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-normal text-slate-950">Admin Activity Form</h2>
                <p className="text-sm text-slate-500">Compose updates for selected contacts or categories.</p>
              </div>
            </div>

            <div className="mt-5 grid gap-4">
              <input className="rounded-md border border-slate-200 px-3 py-3 outline-none focus:ring-4 focus:ring-[#0a84ff]/15" placeholder="Message title" value={composer.title} onChange={(event) => setComposer({ ...composer, title: event.target.value })} />
              <textarea className="min-h-32 rounded-md border border-slate-200 px-3 py-3 outline-none focus:ring-4 focus:ring-[#0a84ff]/15" placeholder="Message body: project update, payment reminder, meeting alert, delivery update, announcement..." value={composer.body} onChange={(event) => setComposer({ ...composer, body: event.target.value })} />
              <div className="grid gap-4 sm:grid-cols-2">
                <select className="rounded-md border border-slate-200 px-3 py-3 outline-none focus:ring-4 focus:ring-[#0a84ff]/15" value={composer.templateName} onChange={(event) => setComposer({ ...composer, templateName: event.target.value })}>
                  {templateOptions.map((template) => <option key={template.value} value={template.value}>{template.label}</option>)}
                </select>
                <div className="relative">
                  <LinkIcon className="absolute left-3 top-3.5 text-slate-400" size={18} aria-hidden="true" />
                  <input className="w-full rounded-md border border-slate-200 py-3 pl-10 pr-3 outline-none focus:ring-4 focus:ring-[#0a84ff]/15" placeholder="Optional link" value={composer.link} onChange={(event) => setComposer({ ...composer, link: event.target.value })} />
                </div>
              </div>

              <div>
                <p className="mb-2 text-sm font-bold text-slate-950">Select contact category</p>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      type="button"
                      key={category}
                      onClick={() => toggleCategory(category)}
                      className={`rounded-full px-4 py-2 text-sm font-bold ring-1 ${composer.selectedCategories.includes(category) ? 'bg-[#0d3b66] text-white ring-[#0d3b66]' : 'bg-white text-slate-600 ring-slate-200'}`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-lg bg-slate-50 p-4">
                <p className="text-sm font-bold text-slate-950">Selected recipients: {selectedContactsDeduped.length}</p>
                <p className="mt-1 text-sm text-slate-500">
                  {selectedContactsDeduped.length ? selectedContactsDeduped.map((contact) => contact.name).join(', ') : 'No active contacts selected yet.'}
                </p>
              </div>

              {sendStatus ? <p className="rounded-md bg-blue-50 px-4 py-3 text-sm font-semibold text-[#0d3b66]">{sendStatus}</p> : null}

              <div className="flex flex-wrap gap-3">
                <button type="button" onClick={sendMessage} disabled={isSending} className="inline-flex items-center gap-2 rounded-md bg-[#34a853] px-5 py-3 text-sm font-bold text-white hover:bg-[#2d954a] disabled:cursor-not-allowed disabled:opacity-60">
                  <Send size={17} aria-hidden="true" />
                  {isSending ? 'Sending...' : 'Send Now'}
                </button>
                <button type="button" onClick={saveDraft} className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50">
                  <Save size={17} aria-hidden="true" />
                  Save as Draft
                </button>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <Megaphone className="text-[#0a84ff]" size={24} aria-hidden="true" />
              <strong className="mt-4 block text-2xl text-slate-950">{contacts.length}</strong>
              <span className="text-sm text-slate-500">Saved contacts</span>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <Bell className="text-[#34a853]" size={24} aria-hidden="true" />
              <strong className="mt-4 block text-2xl text-slate-950">{drafts.length}</strong>
              <span className="text-sm text-slate-500">Saved drafts</span>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <BriefcaseBusiness className="text-[#0d3b66]" size={24} aria-hidden="true" />
              <strong className="mt-4 block text-2xl text-slate-950">{logs.length}</strong>
              <span className="text-sm text-slate-500">Message logs</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-12">
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl font-bold tracking-normal text-slate-950">Message History</h2>
            <button type="button" onClick={() => setLogs([])} className="text-sm font-bold text-red-600">Clear local logs</button>
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[860px] text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase tracking-[0.12em] text-slate-500">
                <tr>
                  <th className="px-3 py-3">Recipient</th>
                  <th className="px-3 py-3">Phone</th>
                  <th className="px-3 py-3">Category</th>
                  <th className="px-3 py-3">Message</th>
                  <th className="px-3 py-3">Status</th>
                  <th className="px-3 py-3">Date & Time</th>
                  <th className="px-3 py-3">API Response</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {logs.length === 0 ? (
                  <tr>
                    <td className="px-3 py-5 text-slate-500" colSpan={7}>No message logs yet.</td>
                  </tr>
                ) : logs.map((log) => (
                  <tr key={log.id}>
                    <td className="px-3 py-3 font-semibold text-slate-950">{log.recipientName}</td>
                    <td className="px-3 py-3">{log.phoneNumber}</td>
                    <td className="px-3 py-3">{log.category}</td>
                    <td className="max-w-xs truncate px-3 py-3" title={log.messageContent}>{log.messageContent || '-'}</td>
                    <td className="px-3 py-3">
                      <span className="inline-flex items-center gap-1">
                        {log.status === 'sent' ? <CheckCircle2 size={15} className="text-emerald-600" aria-hidden="true" /> : log.status === 'pending' ? <Clock3 size={15} className="text-amber-600" aria-hidden="true" /> : <XCircle size={15} className="text-red-600" aria-hidden="true" />}
                        <StatusBadge status={log.status} />
                      </span>
                    </td>
                    <td className="px-3 py-3">{new Date(log.dateTime).toLocaleString('en-IN')}</td>
                    <td className="max-w-xs truncate px-3 py-3" title={JSON.stringify(log.apiResponse)}>{getApiError(log.apiResponse) || 'Stored'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  )
}
