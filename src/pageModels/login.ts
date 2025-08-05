import { Page } from '@playwright/test';

import { login as loginTypes } from '../types/index.ts';

export const createPage = (page: Page) => {
  const locators = {
    loginForm: {
      inputs: {
        username: page.locator('input#user-name'),
        password: page.locator('input#password'),
      },
      buttons: {
        login: page.locator('input#login-button'),
      },
    },
  };
  const helpers = {
    fillLoginField: async (field: loginTypes.LoginField, value: string) => {
      await locators.loginForm.inputs[field].fill(value);
    },
    submitLoginForm: async () => {
      await locators.loginForm.buttons.login.click();
    },
  };

  return {
    locators,
    helpers,
  };
};
