# Validation — 16 September 2026

- Production build: passed on Next.js 16.3.5 Active LTS with Turbopack.
- TypeScript and build-time type validation: passed.
- ESLint 9 / Next.js Core Web Vitals rules: passed with no warnings or errors.
- Dependency audit: `npm audit` reports zero known vulnerabilities.
- AVIF optimisation is disabled; Next.js image output is restricted to WebP.
- 36 prerendered content pages plus 404, sitemap, web manifest and robots routes; enquiry API remains server-side.
- Unique page titles/descriptions, canonical and social metadata, JSON-LD, internal links and anchors: passed on generated HTML.
- All 215 modules/scope items, 43 FAQ answers and six full article bodies present.
- Two client-project detail pages, 35 project module/workflow entries and three cropped dashboard captures present.
- Permanent old-route redirects and noindex 404 confirmed.
- No obsolete testimonials, fake live activity or unapproved case-study names in visible generated text. GO Track IoT and SASPAK Cargo project identities are intentionally published from the supplied material.
- 16 distinct final Unsplash image URLs returned image responses; one broken inherited URL was replaced.
- Enquiry validation, origin checks, size limit, spam field, delivery error/success paths, attribution, idempotency forwarding and rate limit: passed with mocked transport; no external messages sent.
- Original logo reduced from 1,057,274 bytes to 261,237 bytes.

## Remaining launch configuration

The source brief explicitly leaves contact and lead-delivery details unresolved. The launch check therefore intentionally reports missing real contact details, HTTPS lead endpoint and publication date. Public client names and original company statistics remain gated.

No public deployment, browser visual testing, live form delivery, field Core Web Vitals measurement or Search Console/Bing submission was performed. See README.md for setup, verification and deployment instructions.
