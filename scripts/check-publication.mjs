import { readFileSync } from 'node:fs';
const policy = readFileSync(new URL('../src/content/privacy-policy.md', import.meta.url), 'utf8');
if (!/^status: approved$/m.test(policy) || policy.includes('[CONFIRM:')) {
  console.error('Publication blocked: finish the privacy-policy confirmations in src/content/privacy-policy.md and set its status to approved after review. Local builds remain available for review.');
  process.exit(1);
}
