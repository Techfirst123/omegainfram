# Omega Group Contact & Careers Form Setup

Both the homepage Careers enquiry form and the Contact page's project
enquiry form submit silently through a backend endpoint — no `mailto:`
links are shown to visitors.

## Environment Variables

Set these in Vercel Project Settings -> Environment Variables:

```txt
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASSWORD=
SMTP_SECURE=
SMTP_FROM=
```

- `SMTP_HOST` / `SMTP_PORT` / `SMTP_USER` / `SMTP_PASSWORD` are the
  credentials for the mailbox that will send these emails (e.g. a
  Gmail, Zoho, or Microsoft 365 account). This is the sending account,
  not necessarily the recipient.
- `SMTP_SECURE` — set to `true` if using port 465, otherwise leave
  unset (port 587 with STARTTLS is used by default).
- `SMTP_FROM` — optional; defaults to `SMTP_USER` if not set.

## Backend API

Endpoint:

`POST /api/contact/send`

Request body:

```json
{
  "formType": "careers",
  "name": "",
  "email": "",
  "phone": "",
  "message": "",
  "projectType": "",
  "company": ""
}
```

- `formType` must be `"careers"` or `"contact"` — this determines the
  recipient inbox server-side (the client cannot choose an arbitrary
  destination):
  - `careers` → `info@pathfoundbiogas.com`
  - `contact` → `info@omegainfram.com`
- `company` is a hidden honeypot field. Real visitors never fill it;
  if it's non-empty the request is silently accepted but no email is
  sent (basic bot filtering, no CAPTCHA required).
- The visitor's `email` is set as `replyTo`, so replying to the
  notification email replies directly to the enquirer.

## Testing

Without SMTP credentials configured, the endpoint returns a 500 with a
clear "Email service is not configured" message instead of failing
silently — submit the form once credentials are set to confirm mail
delivery end-to-end.
