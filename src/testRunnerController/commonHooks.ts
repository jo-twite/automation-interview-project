// /!\ Do not modify this file /!\

import {
  After,
  AfterAll,
  Before,
  BeforeAll,
  type ITestCaseHookParameter,
  setDefaultTimeout,
} from '@cucumber/cucumber';
import {
  chromium,
  type ChromiumBrowser,
  type ConsoleMessage,
} from '@playwright/test';

import { config } from './playwright.ts';
import { getContext, getPage, type ITestController } from './runner.ts';

let browser: ChromiumBrowser;

declare global {
  let browser: ChromiumBrowser;
}

setDefaultTimeout(60 * 1000);

BeforeAll(async function () {
  browser = await chromium.launch(config.browserOptions);
});

Before(async function (
  this: ITestController,
  { pickle }: ITestCaseHookParameter,
) {
  this.startTime = new Date();
  this.testName = pickle.name.replace(/\W/g, '-');
  // customize the [browser context](https://playwright.dev/docs/next/api/class-browser#browsernewcontextoptions)
  this.context = await browser.newContext({
    acceptDownloads: true,
    recordVideo: undefined,
    viewport: null,
  });

  await this.context.tracing.start({ screenshots: true, snapshots: true });
  this.page = await this.context.newPage();
  this.page.on('console', async (msg: ConsoleMessage) => {
    if (msg.type() === 'log') {
      this.attach(msg.text());
    }
  });
  this.feature = pickle;
});

After(async function (this: ITestController) {
  await getPage(this).close();
  await getContext(this).close();
});

AfterAll(async function () {
  await browser.close();
});
