# Omega Group WhatsApp Admin Setup

The admin dashboard is available at:

`/admin/whatsapp`

## Environment Variables

Set these in Vercel Project Settings -> Environment Variables:

```txt
WHATSAPP_ACCESS_TOKEN=
WHATSAPP_PHONE_NUMBER_ID=
WHATSAPP_BUSINESS_ACCOUNT_ID=
WHATSAPP_VERIFY_TOKEN=
WHATSAPP_ADMIN_TOKEN=
```

`WHATSAPP_ADMIN_TOKEN` is entered in the admin dashboard before sending. It is sent as the `x-admin-token` request header and is never exposed from the backend.

## Backend API

Endpoint:

`POST /api/whatsapp/send`

Request body:

```json
{
  "contacts": [],
  "message": "",
  "templateName": "",
  "link": ""
}
```

The API calls:

`https://graph.facebook.com/v20.0/{WHATSAPP_PHONE_NUMBER_ID}/messages`

## Templates

Template names used by the dashboard:

- `project_update`
- `vendor_work_update`
- `investor_update`
- `payment_reminder`
- `meeting_notification`
- `general_announcement`

These must exist as approved templates in Meta WhatsApp Manager before they can be sent outside the 24-hour customer service window.

## Storage Note

This repository does not currently include a production database provider. The dashboard stores contacts, drafts, and visible message logs in browser localStorage for office workflow testing.

For production-grade centralized logs, connect a database such as Supabase, Neon/Postgres, Firebase, or MongoDB, then persist the API results inside `api/whatsapp/send.js`.
