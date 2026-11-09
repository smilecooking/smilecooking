# Smile Cooking: full editorial and mobile review, 2026-11-10

## Intent and evidence

Keep a consistent voice across all 15 current content pages: the two teachers speak directly to families, acknowledge everyday uncertainty, and explain what they actually do. Preserve agreed lesson eligibility, prices, cancellation conditions, teacher experiences and existing URLs. Avoid invented episodes, outcome promises and unsafe guarantees. Use 先生 / 私たち in guidance and ママ講師 for Erika's role.

The layout is informed by research; no eye tracking or conversion experiment has been conducted on this site. Scanning patterns depend on the visitor's task. Descriptive headings, consistent left alignment and clear grouping support finding relevant information; a universal F-shaped layout is not assumed.

Primary references consulted:

- Nielsen Norman Group, original eye-tracking research: https://www.nngroup.com/articles/layer-cake-pattern-scanning/ and https://www.nngroup.com/articles/eyetracking-tasks-efficient-scanning/
- Digital Agency typography: https://design.digital.go.jp/dads/foundations/typography/ and https://design.digital.go.jp/dads/foundations/typography/accessibility/
- W3C Japanese layout requirements: https://www.w3.org/TR/jlreq/
- W3C reflow and text-spacing understanding: https://www.w3.org/WAI/WCAG22/Understanding/reflow.html and https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html
- GOV.UK writing UI: https://www.gov.uk/service-manual/design/writing-for-user-interfaces

## Changes and tradeoffs

- Replace accumulated conflicting mobile overrides with one responsive stylesheet, 70,464 to approximately 26,000 bytes. Main body 16px, line-height 1.85; notes generally 14px. Noto Sans JP retained with necessary glyphs. Margins 24px on phones, 20px on the narrowest screens. More whitespace improves separation but increases scrolling; section spacing is therefore bounded, and task shortcuts precede the welcome text.
- Keep short headings in authored meaning groups. Remove machine word fragments and arbitrary paragraph line breaks. Paragraphs reflow to the available width with Japanese line-breaking rules and pretty wrapping. No promise of identical wrapping on every device/font setting.
- Use consistent left edges for headings and reading text. Show lesson name, audience, price and action in the same order. Allow 48px primary buttons and 44px menu targets. Keep the header flexible under text enlargement.
- Keep real existing photographs intact with contain sizing. This retains faces, hands and food at the cost of occasional blank image space; decorative cropping is not used.
- Keep teacher names/photo adjacent and stories at full card width. Preserve both teachers' actual experiences, warmth and roughly comparable detail. No qualifications section added.
- FAQ remains the authoritative location for full parent-observation and sibling-accompaniment answers. Other routes use short contextual links. Same-day extra participation remains conditional; no childcare or private nursing-room claim.
- Warmth is expressed through concrete teacher actions and invitations to talk, without adding long greetings to every section. Prices, eligibility and cancellation details remain direct and explicit.
- Preserve canonical URLs, titles/descriptions, structured metadata, sitemap, 13 legacy HTML redirects and LINE destination. HTML refresh redirects are not server-side 301 responses.
- Existing GA4 production-host guard and fixed click events remain intact. LINE clicks do not establish completed bookings. Bounce-rate and booking effects need future real data; none are claimed here.

## Verification

- All 15 pages checked in 320/390/430px iframe layouts (conservative content widths 305/375/415px with desktop scrollbars): no document-level horizontal overflow.
- Representative home, guide, FAQ, teachers and elementary routes checked under 200% root text and W3C text-spacing override values; no document-level horizontal overflow. Header was changed to grow with enlarged text. This is not a complete WCAG certification or physical-device test.
- Desktop home inspected; mobile menu open/Escape, lesson finder, experience tabs and price jump exercised.
- Static verifier covers all 15 pages, 13 old redirects, local assets/anchors, canonical metadata, unique IDs, font glyphs and key eligibility/fee safeguards.
- Six analytics regression tests pass, including private/local/iframe exclusion and delegated LINE clicks.

The per-page editorial review is recorded in scripts/brand-review-20261110.json. It records the initial editorial pass; subsequent layout and phrase-boundary adjustments do not represent new operational policy changes.
