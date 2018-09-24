const puppeteer = require('puppeteer-core');

exports.handler = async (event, context) => {
  try {
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
