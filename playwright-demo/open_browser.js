// const { timeLog } = require('console');
// const { chromium } = require('playwright');

// (async () => {
//   const browser = await chromium.launch({ headless: false });
//   const page = await browser.newPage();
//   await page.goto('https://www.google.com');
//   //To get the title of the web page 
//   //const title=await page.title();
//   //console.log("Page Title : ",title);

//   //to serach text in the searhbox
//   await page.fill('textarea[name="q"]','java');
//   await page.press('textarea[name="q"]','Enter');

//   await page.waitForSelector('#search');
//   console.log('Search complete!');

//   await page.waitForTimeout(1000);
//   await browser.close();
// })();
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.bing.com');

  await page.fill('textarea[name="q"]', 'java'); // slow typing
  await page.press('textarea[name="q"]', 'Enter');

  await page.waitForSelector('#b_content'); // wait for results
  console.log('Bing search complete!');

  await page.waitForTimeout(3000);
  await browser.close()
})();