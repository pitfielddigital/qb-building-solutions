# QB Building Solutions

Static Astro website for https://qbbuildingsolutions.com. Requires Node 22.12 or newer.

## Local checks

```sh
npm ci
npm run check
npm run build
npm run check:site
npm audit
npm run preview
```

On restricted Windows environments, set ASTRO_TELEMETRY_DISABLED=1 before running Astro. The installed build tools may require normal filesystem access.

The output check covers 19 pages and 12 services: metadata, exact canonical routes, structured data, headings, links, responsive assets, robots and sitemap coverage. Automatic push/PR validation also checks types and dependency advisories.

## Releases

For the final domain, run `npm run prepare:deploy`. This forces the root production configuration and checks publication approval, Astro types, the build and generated output. The upload directory is `dist/`; do not upload the repository or a preview build. The production CNAME is checked against `qbbuildingsolutions.com`.

GitHub Pages deployment is manual. Run **Deploy to GitHub Pages** from Actions and select preview or production. Both targets publish to the same Pages site; this is not a separate staging environment. Do not choose preview after launch unless deliberately replacing production.

Preview uses /qb-building-solutions/, noindex, robots blocking, no sitemap entries and no artifact CNAME. The Pages dashboard custom-domain setting must also be absent for the GitHub project URL; deleting artifact CNAME alone does not unset that setting.

Production uses /, allows indexing, and emits the production sitemap. Projects, Privacy Policy and 404 stay noindex and outside the sitemap. Production runs check:publication, which fails until src/content/privacy-policy.md has status: approved and no confirmation markers. Approve only after the business verifies its actual practices.

Configure the host's DNS, custom domain and HTTPS at launch. If using another host, upload the root dist build only after publication and output checks pass, and configure that host's routing, redirects, TLS and headers. No deployment has been triggered by this review.

For the existing GitHub Pages workflow: set Settings → Pages → Source to GitHub Actions, set the custom domain to `qbbuildingsolutions.com`, complete the DNS records shown by GitHub and enable Enforce HTTPS once the certificate is available. Run the deployment workflow with target **production**. Confirm `https://qbbuildingsolutions.com/`, a service URL and a nonexistent URL return the expected site/404, and verify `/robots.txt` and `/sitemap-index.xml`. Include `qbbuildingsolutions.com` in any Behold domain whitelist. Check apex/www and HTTP redirects on the live host.

See [pre-live findings and launch checks](docs/pre-live-review.md) and [Behold feed configuration](docs/behold-feed.md).
