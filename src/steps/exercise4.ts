import { Given, Then, When } from '@cucumber/cucumber';

import { website as websiteConfiguration } from '../configurations/index.ts';
import { createPage } from '../pageModels/index.js';
import { getPage, ITestController } from '../testRunnerController/index.ts';
import { login as loginTypes } from '../types/index.ts';
import '../parameterTypes/index.ts';

Given(
  'the website is loaded',
  async function (this: ITestController): Promise<void> {
    const page = getPage(this);
    await page.goto(websiteConfiguration.MAIN_URL);
  },
);

When(
  'the user fills the {loginField} field with {string}',
  async function (
    this: ITestController,
    loginField: loginTypes.LoginField,
    fieldValue: string,
  ): Promise<void> {
    const page = getPage(this);
    const loginPage = createPage.login(page);
    // TODO: Implement the field filling logic.
  },
);

When(
  'the user clicks the login button',
  async function (this: ITestController): Promise<void> {
    // TODO: Implement this step.
  },
);

Then(
  'the user should be redirected to the home page',
  async function (this: ITestController): Promise<void> {
    // TODO: Implement this step.
  },
);
