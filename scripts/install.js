const puppeteer = require('puppeteer-core');

const browserFetcher = puppeteer.createBrowserFetcher({ platform: 'linux' });
const revision = require('./node_modules/puppeteer-core/package.json').puppeteer.chromium_revision;

browserFetcher.download(revision);
