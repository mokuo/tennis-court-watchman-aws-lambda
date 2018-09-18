const launchChrome = require('@serverless-chrome/lambda');
const puppeteer = require('puppeteer-core');
const { execSync } = require('child_process');

exports.handler = async (event, context) => {
  try {
    const chrome = await launchChrome();
    console.log(chrome);
    console.log(execSync('headless-chromium'));
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://yoyaku.cultos-y.jp/regasu-shinjuku/reserve/gin_menu');
    await page.screenshot({ path: 'example.png' });

    await browser.close();
  } catch (err) {
    console.log(err);
    return err;
  }

  return null;
};
