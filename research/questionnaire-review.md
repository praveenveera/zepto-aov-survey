# Questionnaire Review and Decision Log

## Purpose

This document records how the survey questionnaire was reviewed and revised for the academic study **Increasing AOV at Zepto**.

The instrument is designed to answer one research question:

> When a grocery or household purchase starts small, what influences the user to add more items or stop?

The survey accepts people who use Zepto, another quick-commerce app, a supermarket, a local store, a local market, bulk buying, or a subscription. A respondent does not need to use Zepto.

## Evidence boundary

- The questionnaire and app are research instruments, not findings.
- No participant behaviour, quote, segment size, or AOV result is claimed until real responses are collected and coded.
- Zepto responses are the direct evidence for Zepto AOV analysis.
- Non-Zepto responses provide context about alternatives, value perceptions, and switching barriers.
- The current question design is a product-research hypothesis and requires pilot validation for comprehension and completion time.

## Review findings

### 1. The first version mixed different dimensions

Several questions combined **where**, **how**, and **why/when** a purchase happened. For example, “weekly stock-up” appeared as both a purchase type and a trigger. This created duplicate data and made it unclear which answer represented user intent versus timing.

### 2. The survey initially asked a blank free-text entry question

“What was the first item or need that started the purchase?” was relevant because it identifies the basket entry point. However, a blank field created unnecessary recall effort and produced harder-to-code responses. It was changed to a single-choice category question with an “Other” text field.

### 3. Open text was moved later

Early open-text questions can increase abandonment and produce vague answers before the respondent has recalled a concrete purchase. Structured questions now capture the basic purchase context first. Open text is reserved for the final Zepto stopping-point response and optional follow-up details.

### 4. Questions are adaptive, not linear

The recent purchase channel determines the later branch:

- Recent Zepto purchase → Zepto choice and stopping questions.
- Recent non-Zepto purchase → method-specific reasons, prior Zepto usage, and shortlist barriers.

This prevents respondents from answering irrelevant Zepto questions and gives the study competitor and substitute context without treating it as Zepto behaviour.

## Current question logic

| Step | Question purpose | Response format | Why it is included |
|---|---|---|---|
| Consent | Confirm voluntary participation | Checkbox | Ethical participation and anonymous academic use |
| Q1: Recent channel | Where the purchase happened | Single choice | Selects the relevant adaptive branch |
| Q2: Order shape | What the order looked like | Single choice | Measures basket form without mixing it with timing |
| Q3: Immediate trigger | Why it was placed at that moment | Single choice | Separates urgency, replenishment, event, offer, and discovery |
| Q4: Purchase goal | What the respondent was trying to accomplish | Single choice + Other | Captures intent in a low-effort, codable form |
| Household size | Scale of the shopping mission | Single choice | Provides context for basket size without asking intrusive living-arrangement questions |
| Entry need | What started the basket | Single choice + Other | Identifies the first category and possible complementary-item opportunity |
| Items and spend | Basket size proxy | Single choice | Enables directional AOV and items/order analysis without asking exact sensitive amounts |
| Categories | Breadth of basket | Multi-select + Other | Measures cross-category expansion |
| Basket building | What happened after the first item | Single choice | Captures browse, planned additions, threshold behaviour, immediate checkout, or removal |
| Considered-but-not-added | Whether expansion was possible | Yes / no / unsure | Distinguishes no opportunity from a missed expansion opportunity |
| Stop reason | Why the considered item was not added | Single choice + Other | Identifies psychological, price, relevance, trust, and structural blockers |
| Threshold response | Behaviour near fee/minimum thresholds | Single choice | Tests whether thresholds create useful expansion or abandonment |
| Method branch | Why this channel was chosen | Single choice + Other | Identifies Zepto value drivers or substitute-channel advantages |
| Follow-up | Permission for qualitative probing | Yes / no + optional contact | Enables real interviews without making contact mandatory |

## The duplicate corrected

### Before

**Q2. What kind of purchase was this?**

- One-off urgent purchase
- Planned top-up
- Weekly stock-up
- Monthly stock-up
- Recurring subscription or reorder
- Event or guests

**Q3. What triggered that purchase?**

- Urgent need
- Planned top-up
- Weekly or monthly stock-up
- Meal or snack
- Event or guests
- Recurring subscription

The same concepts appeared twice. A respondent could answer “weekly stock-up” to both questions without adding new information.

### Now

**Q2 — What did this order look like?**

- Single-item or small basket
- Small planned top-up
- Larger stock-up
- Recurring subscription or reorder
- Event or guests
- Other

**Q3 — What triggered you to place it at that moment?**

- Something ran out or was needed urgently
- Routine replenishment
- Planning for the week or month
- Meal or snack
- Event or guests
- Offer or discount
- Browsing or discovering something new
- Other

Q2 now describes the **shape of the order**. Q3 describes the **reason and timing of the order**. These are related but not duplicates.

## Current entry-need question

**Which type of item or need started the purchase?**

- Milk, dairy, bread, or eggs
- Fresh produce
- Staples or packaged groceries
- Snacks or beverages
- Personal care
- Household cleaning
- Baby or pet products
- Ready-to-eat or meal items
- Other → short text field

This question is useful because it links the first need to later basket expansion. For example, the analysis can compare whether purchases starting with household cleaning expand differently from purchases starting with snacks. The options are deliberately broad enough for fast completion and consistent coding.

## Validation completed

- JavaScript syntax check passed for the survey app.
- The public GitHub Pages build was published at commit `2b4f3a1`.
- Live browser verification confirmed that the entry-need question displays selectable categories.
- Live browser verification confirmed that selecting “Other” reveals the required “Please specify” input.

## Validation still required

- Pilot with real participants from each intended channel group.
- Check whether respondents interpret “order shape” and “trigger” differently.
- Measure completion time and drop-off by question.
- Review whether any option is missing or too leading.
- Confirm the Apps Script response endpoint stores submissions correctly before distribution.
- After collection, compare the response distribution with the working behavioural segments and revise them.

## Decision rule for future edits

Keep a question only if it does at least one of the following:

1. identifies the purchase context;
2. explains basket expansion or stopping;
3. selects a relevant adaptive branch; or
4. captures an actionable product barrier.

Remove or rewrite questions that merely repeat an earlier dimension, ask for an abstract opinion instead of a real purchase behaviour, or create a free-text burden without a clear analysis use.
