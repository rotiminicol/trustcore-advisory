# TRUSTCORE ADVISORY Start a Conversation — On-site Enquiry Flow

## User journey

The page will keep every interaction on the website. A visitor chooses their focus, provides their name, business, email, and message, then receives an in-page confirmation state. No `mailto:` link or external mail client will be used.

| Stage | Visitor action | Interface response |
| --- | --- | --- |
| 1. Orient | Understand what to share | A short, useful guide and service-focus selector. |
| 2. Brief | Enter contact and operating context | A progressive, calm form with clear labels and useful defaults. |
| 3. Confirm | Submit the enquiry | An in-page confirmation replaces the form; no browser mail application opens. |
| 4. Deliver later | Backend phase | The same submission boundary will call a server route that sends the enquiry through Resend to Eva’s business inbox. |

## Current front-end behavior

The form validates required fields and displays an explicit design-preview confirmation. It will not claim to send a real email until the Resend backend and client email address are configured. The component exposes a single future submission point so the integration can be added without redesigning the form.
