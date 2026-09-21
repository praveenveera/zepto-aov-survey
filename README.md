# Project 4 — Increasing AOV at Zepto

This workspace contains the evidence-controlled research and submission artifacts for the group assignment on increasing Average Order Value (AOV) at Zepto.

## Current decision

Use a neutral grocery and quick-commerce survey. Do not assume that respondents use Zepto. Analyse recent Zepto orders as the core AOV evidence; use competitor, supermarket, local-market, bulk-purchase, and subscription behaviour as context for alternatives and barriers.

## Evidence rules

- Do not invent interviews, quotes, numbers, or user behaviour.
- Label participant evidence, secondary evidence, assumptions, hypotheses, and recommendations separately.
- Treat self-serve survey responses as survey evidence, not as fully probed interviews.
- Keep contact details out of public synthesis artifacts.

## Working files

- [`interviews/survey-form-content.md`](interviews/survey-form-content.md) — draft questionnaire and branching logic
- [`research/sampling-plan.md`](research/sampling-plan.md) — team allocation and analysis plan
- [`webapp/index.html`](webapp/index.html) — mobile survey app with adaptive method branches

## Next gate

Review the adaptive flow and questionnaire, then configure the separate Zepto response backend before distribution.

The app now asks the common recent-purchase questions first, then adapts later questions to the selected recent method. A recent Zepto order receives Zepto-specific questions; a recent competitor, supermarket, local-market, bulk, or subscription purchase receives method-specific alternative questions. Follow-up contact is optional and stays on the same final screen.
