// Check the generated output, including routes, metadata, links and structured data.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const base = (process.env.SITE_BASE || '/').replace(/\/$/,'');
const preview = process.env.PUBLIC_SITE_PREVIEW === 'true' || Boolean(base);
const root = path.resolve(process.env.SITE_CHECK_DIR || 'dist');
const files = fs.readdirSync(root,{recursive:true}).filter(file=>file.endsWith('.html'));
const titles = new Set();
const failures = [];
const decode = value=>value.replace(/&#(\d+);/g,(_,n)=>String.fromCodePoint(Number(n))).replaceAll('&amp;','&').replaceAll('&quot;','"');
function check(condition,message) { if(!condition) failures.push(message); }
const attrs = tag=>Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([,key,value])=>[key,decode(value)]));
const services=JSON.parse(fs.readFileSync('src/data/services.json','utf8'));
for(const file of files) {
  const html=fs.readFileSync(path.join(root,file),'utf8');
  const label=file.replaceAll('\\','/');
  const title=html.match(/<title>(.*?)<\/title>/)?.[1];
  check(title && !titles.has(title),`${label}: missing/duplicate title`); titles.add(title);
  check((html.match(/<h1\b/g)||[]).length===1,`${label}: expected one h1`);
  const meta=Object.fromEntries([...html.matchAll(/<meta\b[^>]+>/g)].map(([tag])=>{const a=attrs(tag);return [a.name||a.property,a.content]}));
  check(meta.description?.length>30,`${label}: description missing`);
  check(meta['og:title']===decode(title),`${label}: OG title mismatch`);
  check(meta['og:description']===meta.description,`${label}: OG description mismatch`);
  const canonical=[...html.matchAll(/<link\b[^>]+>/g)].map(([tag])=>attrs(tag)).find(a=>a.rel==='canonical')?.href;
  check(canonical?.startsWith('https://qbbuildingsolutions.com/'),`${label}: canonical origin`);
  check(!base || !canonical?.includes(base),`${label}: preview base in canonical`);
  check(meta['og:url']===canonical,`${label}: OG URL mismatch`);
  const excluded=/^(404\.html|projects\/|privacy-policy\/)/.test(label);
  check(meta.robots===(preview||excluded?'noindex, follow':'index, follow'),`${label}: robots incorrect`);
  check(!html.includes('pitfielddigital.github.io'),`${label}: stale preview URL`);
  check(!/<iframe|<form\b/.test(html),`${label}: unexpected embed/form without approved integration`);
  if(!label.startsWith('privacy-policy/')) check(!/\[CONFIRM:|Do not publish|Use cards for|Related links:\*\*/.test(html),`${label}: editorial instructions leaked`);
  for(const [,json] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { const data=JSON.parse(json); check(data['@graph']?.[0]?.['@type']==='Organization',`${label}: missing Organization`); if(label.startsWith('services/')&&label!=='services/index.html') check(data['@graph'].some(n=>n['@type']==='Service'),`${label}: missing Service`); }
    catch { failures.push(`${label}: invalid JSON-LD`); }
  }
  for(const [tag] of html.matchAll(/<(?:a|img|script|link)\b[^>]*>/g)) {
    const a=attrs(tag); const url=a.href||a.src;
    if(tag.startsWith('<img')) check(/\balt(?:=|\s|>)/.test(tag),`${label}: image alt missing`);
    if(!url) { if(tag.startsWith('<a ')) failures.push(`${label}: anchor without href`); continue; }
    if(url.startsWith('#')) { check(html.includes(`id="${url.slice(1)}"`),`${label}: broken fragment ${url}`); continue; }
    if(!url.startsWith('/')) continue;
    check(!base || url.startsWith(`${base}/`),`${label}: missing base ${url}`);
    const local=decodeURIComponent(url.slice(base.length).split(/[?#]/)[0]);
    const target=path.join(root,local);
    check(fs.existsSync(target)&&(!fs.statSync(target).isDirectory()||fs.existsSync(path.join(target,'index.html'))),`${label}: missing local target ${url}`);
  }
  const slug=label.match(/^services\/([^/]+)\/index.html$/)?.[1];
  if(slug) {
    const service=services[slug];
    check(html.includes(service.heading),`${label}: service heading missing`);
    check((html.match(/<details>/g)||[]).length===2,`${label}: FAQs missing`);
    for(const section of service.sections) check(html.includes(section.heading.replaceAll('&','&amp;'))||html.includes(section.heading),`${label}: missing section ${section.heading}`);
  }
}
check(files.length===19,`Expected 19 HTML pages, got ${files.length}`);
for(const slug of Object.keys(services)) check(fs.existsSync(path.join(root,'services',slug,'index.html')),`Missing service ${slug}`);
const sitemapFiles=fs.readdirSync(root).filter(file=>/^sitemap.*\.xml$/.test(file));
const sitemap=sitemapFiles.map(file=>fs.readFileSync(path.join(root,file),'utf8')).join('\n');
check(!/\/(?:projects|privacy-policy|404)(?:\/|\.html)<\/loc>/.test(sitemap),'Noindex pages in sitemap');
const robots=fs.readFileSync(path.join(root,'robots.txt'),'utf8');
check(preview?robots.includes('Disallow: /'):robots.includes('https://qbbuildingsolutions.com/sitemap-index.xml'),'Incorrect robots');
if(!preview) for(const slug of Object.keys(services)) check(sitemap.includes(`/services/${slug}/`),`Service missing from sitemap: ${slug}`);
assert.equal(failures.length,0,failures.join('\n'));
console.log(`PASS: ${files.length} pages; 12 services; metadata, headings, JSON-LD, links/assets, privacy isolation, sitemap and robots (${preview?'preview':'production'} configuration).`);
