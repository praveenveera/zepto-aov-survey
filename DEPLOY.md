# Deploying the Basket Stories survey

The frontend is a single static HTML file. The backend is a Google Sheet Apps Script Web App. Keep this backend separate from Project 3 so response columns and datasets cannot mix.

## Backend setup

1. Create a new Google Sheet in the account that should own the responses.
2. Open **Extensions → Apps Script** and replace the starter code with [`apps-script.gs`](apps-script.gs).
3. Save, then run `setupCheck` once and approve the requested Google permissions.
4. Deploy → New deployment → Web app.
5. Execute as **Me** and allow access to **Anyone**.
6. Copy the Web App URL into `APPS_SCRIPT_URL` near the top of [`index.html`](index.html).
7. Test one submission and confirm the `Responses` sheet receives one row.

Until the URL is configured, the app stores the last test response in the browser's local storage and does not send data anywhere.

## Frontend hosting

Publish this `webapp/` directory as a separate static site or repository. Do not overwrite the existing Project 3 survey URL. Suggested path: `zepto-aov-survey`.

Before public distribution, verify the mobile layout, all language toggles, the consent gate, branching, submit state, and the separate response sheet.
