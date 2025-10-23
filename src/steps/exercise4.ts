import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

import { MAIN_URL } from '../configurations/website.ts';
import { createLoginPage } from '../pageModels/login.ts';
import { loginField } from '../parameterTypes/login.ts';
import { getPage, type ITestController } from '../testRunnerController/index.ts';

import type { LoginField } from '../types/login.ts';

loginField();

Given('the website is loaded', async function (this: ITestController): Promise<void> {
  const page = getPage(this);
  await page.goto(MAIN_URL);
});

When(
  'the user fills the {loginField} field with {string}',
  async function (this: ITestController, field: LoginField, value: string): Promise<void> {
    const page = getPage(this);
    const loginPage = createLoginPage(page);
    await loginPage.helpers.fillLoginField(field, value);
  },
);

When('the user clicks the login button', async function (this: ITestController): Promise<void> {
  const page = getPage(this);
  const loginPage = createLoginPage(page);
  await loginPage.helpers.submitLoginForm();
});

Then('the user should be redirected to the home page', async function (this: ITestController) {
  const page = getPage(this);
  await expect(page).toHaveURL(/\/inventory\.html$/);
  await expect(page.locator('#add-to-cart-sauce-labs-backpack')).toBeVisible();
});


Then('the login should be locked out with an error message', async function (this: ITestController): Promise<void> {
  const page = getPage(this);
  const error = page.locator('h3[data-test="error"]');
  await expect(error).toBeVisible();
  await expect(error).toContainText(/Username and password do not match any user in this service/i);
});
