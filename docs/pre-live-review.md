# Pre-live review — 6 October 2026

## Current release status — 7 October 2026

The user confirmed GitHub Pages hosting and approved publication on the basis that the policy reflects the website. Added an explicit GitHub Pages disclosure covering IP logging for security, verified against GitHub's documentation, and recorded `status: approved`. `npm run prepare:deploy` now passes publication, Astro, production build and output checks. Earlier policy-blocker notes below describe the previous review state. No deployment has been performed; configure Pages, DNS and HTTPS and verify live-host behavior at launch.

## Deployment preparation — 7 October 2026

Final domain confirmed as `https://qbbuildingsolutions.com/`. Added `npm run prepare:deploy` to force production configuration and run publication, type, build and output checks. Production output now checks CNAME as well as canonical URLs, sitemap and robots. The deployment workflow audits dependencies and checks publication approval before building a production release.

Reverified Astro (zero errors/warnings), production build (19 pages), output checks (12 services), and npm audit (zero vulnerabilities). The release command correctly stops while the privacy policy has `status: review`. Production output is available in `dist/` for review. No push or deployment was performed; DNS, HTTPS and live-host responses remain unverified.

## Release status

Technical production and preview output checks pass. Launch remains blocked by business approval of the privacy policy (`status: review`). Nothing has been deployed or pushed by this review.

## Fixes

- Updated Astro from 6.1.6 to 7.3.5 and refreshed dependencies to clear 12 audit advisories. The full npm audit now reports zero vulnerabilities. Production/preview builds, types and browser checks were repeated for this major upgrade. `compressHTML: true` preserves previous whitespace behavior.
- Added Astro/TypeScript checking and automatic validation on pushes and pull requests.
- Made Pages releases manual with explicit preview/production targets. Both targets run output validation; production also requires publication approval. Automatic preview deployment was removed so future pushes cannot overwrite an indexed live release with a noindex preview.
- Removed CNAME from preview artifacts; production retains the supplied domain. Dashboard custom-domain settings still require verification.
- Added WebSite/WebPage and service breadcrumb structured data alongside the existing Organization/Service graph. No unverified address, hours, awards or reviews were added.
- Added Twitter metadata and stronger canonical, description, viewport, sitemap, image dimension and responsive-asset checks.
- Converted the About image to responsive WebP variants.

## Verification

- Production: 19 HTML pages and 12 services build; metadata, headings, structured data, local links/assets, sitemap and robots checks pass.
- Subpath preview: output checks pass; noindex and crawl blocking are correct. The sitemap “No pages found” warning is expected for preview.
- Astro/TypeScript checks and full npm audit pass.
- Browser: all linked pages at 320px; home, services, extensions, contact, privacy and projects at 390, 480, 700, 768, 999, 1000, 1280 and 1920px. No horizontal page overflow or broken completed images found. This is Chromium verification, not a full Safari/Firefox/device lab test.
- Mobile menu opens/closes; Escape restores button focus. Native FAQ disclosure opens.
- Production has 16 indexable pages. Projects, Privacy Policy and 404 remain noindex and excluded from the sitemap. Robots allows crawlers and advertises the canonical sitemap. Preview blocks crawling and indexing.
- Consistent phone/email links work as enquiry destinations; no form backend is required.
- Publication check correctly fails while the policy remains under review. Noindex alone is not a publication safeguard.
- Behold's script is included on Projects, but posts did not render in this browser session. Contact fallback remains available. The actual feed and third-party storage behavior are unverified.
- No hosted Lighthouse score or field Core Web Vitals is claimed from local testing.

## Required before launch

1. Business owner: verify controller identity/postal contact arrangements, divisions, providers, retention and transfers against the policy; then approve it. Automated checks cannot verify actual business practices.
2. Confirm live host and canonical domain `https://qbbuildingsolutions.com`. For Pages, configure DNS/custom domain, verify domain ownership and enable HTTPS. Custom domains require the root production build.
3. Check HTTP/www redirects to canonical HTTPS, 200/404 status codes, robots and sitemap responses, and absence of host-level indexing blocks. These are unverified until checked on the chosen host.
4. Verify Behold on the real hostname: whitelist, account connection, photos, mobile layout, failure behavior, external links and cookie/storage requests.
5. Client sign-off: phone/mailbox ownership and deliverability, final copy, image permissions and service claims.
6. Review host/CDN security headers, caching and compression. GitHub Pages does not honor arbitrary `_headers` files. Test any CSP against actual Behold requests before enforcing it.
7. After publishing, run hosted performance/accessibility checks and Safari/Firefox/real-device spot checks. Submit the sitemap in Search Console and verify index eligibility. Keep verified Google Business Profile details consistent with the site.

## SEO / GEO

Service scope, locations, FAQs and contacts are present in generated HTML, with internal links and schema matching visible content. These support search and AI retrieval but do not guarantee indexing, rankings or citations. Google says AI search requires no special AI text file or dedicated schema: https://developers.google.com/search/docs/appearance/ai-features.

Useful future content: permissioned project examples with specific work/location details, authentic feedback and verified business/profile information. Projects stays noindex while it is an interim enquiry page.
