/** Local links respect Astro's deployment base; canonicals use the public domain. */
export const siteOrigin = 'https://qbbuildingsolutions.com';
export const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
export function href(path = '/') { return `${basePath}/${path.replace(/^\//, '')}`; }
export function canonicalUrl(path: string) {
  const local = basePath && (path === basePath || path.startsWith(`${basePath}/`)) ? path.slice(basePath.length) : path;
  if (/^\/404(?:\.html)?\/?$/.test(local)) return `${siteOrigin}/404.html`;
  return new URL(local === '/' ? '/' : `${local.replace(/\/$/, '')}/`, siteOrigin).href;
}
