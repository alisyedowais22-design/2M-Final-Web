# Next.js security update — 16 September 2026

## Completed

- Upgraded `next` and `eslint-config-next` from 14.2.35 to 16.3.5 Active LTS.
- Removed AVIF from `images.formats`; the built-in optimiser now produces WebP only.
- Migrated App Router dynamic route parameters to the asynchronous Next.js 15/16 API.
- Replaced the removed `next lint` command with ESLint flat configuration using the Next.js Core Web Vitals and TypeScript rule sets.
- Resolved the stricter React ref rule in the mobile navigation without changing its behavior.
- Preserved the restricted `images.unsplash.com` remote image allowlist.

## Verification

- `npm audit`: zero known vulnerabilities.
- ESLint: passed with no warnings or errors.
- TypeScript: passed.
- Next.js 16.3.5 production build: passed.
- Generated HTML/SEO regression suite: 35 content pages passed, including both client project pages and all three cropped dashboard images.
- Enquiry endpoint regression suite: passed without external requests.

## Deployment

Use Node.js 20.9 or newer. Install the exact lockfile and build a fresh deployment:

```bash
npm ci
npm run build
npm start
```

Do not copy an old `.next` directory or old `node_modules` into production. Keep untrusted remote image sources blocked and do not re-enable AVIF until the deployed Next.js release and image-processing path have been reviewed.

## Advisory references

- [Next.js August 2026 security release](https://nextjs.org/blog/august-2026-security-release)
- [GHSA-2xp9-vwfh-vxw4 — AVIF Image Optimization RCE](https://github.com/vercel/next.js/security/advisories/GHSA-2xp9-vwfh-vxw4)
- [GHSA-p293-qw3h-jr36 — Windows-hosted RCE](https://github.com/vercel/next.js/security/advisories/GHSA-p293-qw3h-jr36)
- [GHSA-q4gf-8mx6-v5v3 — Server Components denial of service](https://github.com/vercel/next.js/security/advisories/GHSA-q4gf-8mx6-v5v3)
