const puppeteer = require('puppeteer');

exports.handler = async (event, context) => {
  try {
    const browserFetcher = puppeteer.createBrowserFetcher({ platform: 'mac' });
    const localRevisions = await browserFetcher.localRevisions();
    // TODO: localRevisions の最新を取るようにする
    const revisionInfo = browserFetcher.revisionInfo(localRevisions[0]);

    const browser = await puppeteer.launch({ executablePath: revisionInfo.executablePath });
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
