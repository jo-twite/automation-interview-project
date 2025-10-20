import { Given, Then, When } from '@cucumber/cucumber';

import { MAIN_URL } from '../configurations/website.ts';
import { createLoginPage } from '../pageModels/login.ts';
import { loginField } from '../parameterTypes/login.ts';
import {
  getPage,
  type ITestController,
} from '../testRunnerController/index.ts';
import type { LoginField } from '../types/login.ts';

loginField();

Given(
  'the website is loaded',
  async function (this: ITestController): Promise<void> {
    const page = getPage(this);
    await page.goto(MAIN_URL);
  },
);

When(
  'the user fills the {loginField} field with {string}',
  async function (
    this: ITestController,
    loginField: LoginField,
    fieldValue: string,
  ): Promise<void> {
    const page = getPage(this);
    const loginPage = createLoginPage(page);
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
