# 2M Designers website

Updated from **2MDesignersWebsiteContent (1)(1).docx**. The original navy/white/red visual system, logo, typography, hero treatment and image-card style are retained. New content uses the same component language.

## Run

Requires Node.js 20+ and npm.

```bash
npm ci
cp .env.example .env.local
npm run dev
```

For a Node-capable production host:

```bash
npm run build
npm start
```

This package uses Next.js App Router with static prerendering for public pages and a server route for enquiries. It is **not** a plain HTML upload for PHP-only shared hosting. Serve it with a Next.js/Node host; do not upload `.next/server` directly as a public directory. Redirects and image optimisation are handled by Next.js. No deployment or domain change was performed in this update.

## Content delivered

- Seven solution pages at `/solutions/*`, including the School Management System, and six service pages at `/services/*`.
- A new `/projects` showcase with separate GO Track IoT ERP and SASPAK Cargo ERP detail pages.
- Three client-supplied dashboard captures cropped to the application interface, with browser chrome and the Windows taskbar removed.
- All 215 module/scope entries and 43 offering FAQs, including the supplied school-management brief.
- Eight industries, three case studies and six full insight articles, including the worked idling-cost table.
- Revised homepage, About, Contact, indexes and contextual enquiry forms.
- Privacy Policy, Terms of Use, Cookie Policy, Editorial Policy, FAQ, HTML site map and custom 404.
- Obsolete login, pricing, careers and previous testimonial content removed. Existing URLs redirect permanently to relevant replacements.
- Old fabricated live activity replaced by a same-style platform catalogue.

Content is in `content/*.json`; offering details are rendered by one reusable template. Articles preserve source paragraphs, headings, lists and tables. Target keywords stay in editorial data; no keyword stuffing or obsolete meta-keyword tag is generated.

## SEO and trust

- Unique title/description, absolute canonical, Open Graph/X text metadata on every public content page.
- Crawlable server-generated HTML, one H1 per page, internal links and breadcrumbs.
- `/sitemap.xml` contains current canonical content routes only; `/robots.txt` links it and excludes `/api/`.
- Organization/WebSite, Service, FAQPage, Article and BreadcrumbList JSON-LD reflect the rendered content. FAQ markup is semantic; it does not promise a Google rich result.
- Real logo-derived favicon and touch icons; responsive image dimensions, modern formats and lazy loading.
- Company authorship and editorial/corrections policy; no invented expert biographies, reviews, certifications or aggregate ratings.
- Prepared dates remain visible unless an actual publication date is configured. `datePublished` is omitted while that value is unknown.
- Existing case-study names are withheld by default and remain controlled by `APPROVED_CASE_STUDIES`. The GO Track IoT and SASPAK Cargo project pages intentionally publish the names and dashboard captures supplied for this update.
- Unconfirmed 10+/3-country/24-hour company statistics are replaced by countable catalogue and delivery figures until `COMPANY_CLAIMS_VERIFIED=true`.
- Absolute guarantees and unsupported numeric assertions in several passages were qualified. Product capability descriptions otherwise follow the supplied brief.
- No invented address, telephone or contact email is published. Karachi/Dubai locations, founding year and social URLs come from the source document.

### Owner configuration required

The brief explicitly marks its email, phone and WhatsApp values as placeholders. Supply real values in `.env.local` or the host environment:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical production origin; defaults to the document's `https://www.2mdesigners.com` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Verified public contact email |
| `NEXT_PUBLIC_CONTACT_PHONE` | Verified public phone |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Country code and digits only |
| `CONTACT_WEBHOOK_URL` | HTTPS lead-delivery endpoint |
| `CONTACT_WEBHOOK_TOKEN` | Optional server-only bearer token |
| `SITE_PUBLICATION_DATE` | Actual publication date, YYYY-MM-DD |
| `SITE_INDEXABLE` | `false` for staging; `true` for public production |
| `APPROVED_CASE_STUDIES` | Comma-separated `uae-bilingual-platform,pakistan-mixed-device-platform,pakistan-security-tracking`, only with permission |
| `COMPANY_CLAIMS_VERIFIED` | Enables the four original company trust figures together |
| `GOOGLE_SITE_VERIFICATION` | Search Console verification value |
| `BING_SITE_VERIFICATION` | Bing Webmaster Tools verification value |

Rebuild after changing public contact, indexing, publication, permissions or claim settings: marketing pages are generated at build time. Do not place secrets in `NEXT_PUBLIC_*` values.

### Enquiry delivery

The `/api/enquiry` endpoint validates name, email, phone, service, contact method, message and originating path. It limits request size, checks same-origin submissions, rejects the honeypot field and applies a per-process email-keyed rate guard. It sends no personal data to console logs.

The configured webhook must **durably accept the lead before returning 2xx**, and should deduplicate the `Idempotency-Key` header. Payload includes the submitted fields, originating path, service name, received timestamp and request ID. A non-2xx/timeout is shown as a delivery failure, never a success. Without a delivery endpoint, the form is disabled and the API returns 503.

For multi-instance production, configure shared rate limiting/spam protection at the edge or delivery provider; the included in-memory guard is only a per-process safeguard. This project does not provide a CRM or store leads locally. No live email was sent during validation.

### Before public launch

```bash
node scripts/check-launch.mjs
```

Confirm actual contact details, lead delivery and publication date; approve or retain anonymised case studies; review the company claims and privacy/terms text against actual operations. The checker intentionally fails with the supplied blank launch values.

Verify the property in Google Search Console and Bing Webmaster Tools, then submit `/sitemap.xml`. These account actions require the owner's access and have not been performed. No analytics tags are installed; add optional tracking only with appropriate consent configuration and policy updates.

## Performance and checks

- Public content prerendered; client code is limited to navigation, slideshow and enquiry controls.
- FAQs use native HTML details and remain readable without JavaScript.
- The slideshow initially mounts one image instead of requesting all slides at first render.
- Same three font families, `font-display: swap`, with noncritical mono preload disabled; Next.js self-hosts built font files.
- Logo reduced from 1,057,274 to 261,237 bytes without changing the artwork.
- Unsplash embeds checked for HTTP image responses; one inherited dead warehouse URL was replaced.
- Next.js and its ESLint config upgraded to Active LTS 16.3.5. AVIF optimisation is disabled and WebP retained following the August 2026 image-optimiser advisory. Dynamic App Router parameters and lint configuration were migrated for Next.js 16.
- `npm audit` reports zero known dependency vulnerabilities for the packaged lockfile as checked on 16 September 2026.

```bash
node node_modules/typescript/bin/tsc --noEmit --incremental false
node scripts/check-enquiry.cjs
npm run build
python scripts/check-built-seo.py
```

The build and source/static HTML checks do not measure field Core Web Vitals. Browser visual QA, live hosting speed and end-to-end delivery with a real provider need the final hosting configuration. There is no promised ranking, Lighthouse score or indexing date.

## SEO references

- [Google: Helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Google: Structured data guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- [Google: Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Next.js: December 2025 security update](https://nextjs.org/blog/security-update-2025-12-11)
- [Next.js: August 2026 security release](https://nextjs.org/blog/august-2026-security-release)
- [Next.js support policy](https://nextjs.org/support-policy)

Image sources are listed in `IMAGE-SOURCES.md`.
