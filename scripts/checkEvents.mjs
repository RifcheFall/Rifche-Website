import puppeteer from 'puppeteer';

const browser = await puppeteer.launch();
const page = await browser.newPage();
page.on('console', msg => console.log('browser:', msg.type(), msg.text()));
await page.goto('http://localhost:5173/charity-website/events-photos.html', { waitUntil: 'networkidle0' });
const gridHtml = await page.$eval('#albums-grid', el => el.innerHTML);
console.log('grid length', gridHtml.length);
await browser.close();
