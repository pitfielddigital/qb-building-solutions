import { spawnSync } from 'node:child_process';

// Always create a root-domain release, even after working on a subpath preview.
const env = { ...process.env, ASTRO_TELEMETRY_DISABLED: '1', SITE_BASE: '/', PUBLIC_SITE_PREVIEW: 'false' };
const commands = [
  ['scripts/check-publication.mjs'],
  ['node_modules/astro/bin/astro.mjs', 'check'],
  ['node_modules/astro/bin/astro.mjs', 'build'],
  ['scripts/check-site.mjs'],
];
for (const args of commands) {
  const result = spawnSync(process.execPath, args, { env, stdio: 'inherit' });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}
console.log('Production release ready in dist/ for https://qbbuildingsolutions.com/');
