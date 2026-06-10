import { chromium } from 'playwright';
const BASE = 'http://localhost:3031';

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

const snap = async (url, path, scrollY = 0) => {
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  if (scrollY) { await page.evaluate(y => window.scrollTo(0, y), scrollY); await page.waitForTimeout(600); }
  await page.screenshot({ path });
};

await snap(`${BASE}/`, '/tmp/s1-hero.png');
await snap(`${BASE}/`, '/tmp/s2-benefits.png', 900);
await snap(`${BASE}/`, '/tmp/s3-howitworks.png', 1900);
await snap(`${BASE}/`, '/tmp/s4-impact.png', 3000);
await snap(`${BASE}/`, '/tmp/s5-footer.png', 999999);
await snap(`${BASE}/isletmeler`, '/tmp/s6-isletmeler.png');
await snap(`${BASE}/isletmeler`, '/tmp/s7-isletmeler-mid.png', 1400);
await snap(`${BASE}/sss`, '/tmp/s8-sss.png');

await browser.close();
console.log('done');
