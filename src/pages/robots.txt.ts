export function GET() {
  const preview = import.meta.env.DEV || import.meta.env.PUBLIC_SITE_PREVIEW === 'true' || import.meta.env.BASE_URL !== '/';
  return new Response(preview ? 'User-agent: *\nDisallow: /\n' : 'User-agent: *\nAllow: /\n\nSitemap: https://qbbuildingsolutions.com/sitemap-index.xml\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
