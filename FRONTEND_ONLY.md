# Frontend-only deployment

This repository is a **static Vite + React frontend**. It intentionally contains no server routes, backend logic, database integration, email provider, API proxy, or secret configuration.

## Vercel settings

Vercel should use the repository root with the following settings, which are also defined in `vercel.json`.

| Setting | Value |
| --- | --- |
| Framework preset | Vite |
| Build command | `pnpm build` |
| Output directory | `dist` |
| Client-side routing | All routes rewrite to `/index.html` |

The enquiry interface is front-end only. A separate backend repository can later receive form payloads and deliver messages through Resend.
