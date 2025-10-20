// /!\ Do not modify this file /!\

import {
  type IWorldOptions,
  setWorldConstructor,
  World,
} from '@cucumber/cucumber';
import type { Pickle } from '@cucumber/messages';
import type {
  APIRequestContext,
  BrowserContext,
  Page,
  PlaywrightTestOptions,
} from '@playwright/test';

export interface CucumberWorldConstructorParams {
  parameters: { [key: string]: string };
}

export interface ITestController extends World {
  debug: boolean;
  feature?: Pickle;
  context?: BrowserContext;
  page?: Page;

  testName?: string;
  startTime?: Date;

  server?: APIRequestContext;

  playwrightOptions?: PlaywrightTestOptions;
}

export class TestController extends World implements ITestController {
  constructor(options: IWorldOptions) {
    super(options);
  }
  debug = false;
}

/**
 * Return the runner page object or throw an error if not defined
 * @param {ITestController} testController The test controller which operates the test
 * @returns {Page} The page object
 * @throws {Error} If the page is not defined
 */
export const getPage = (testController: ITestController): Page => {
  if (!testController.page) {
    throw new Error(`No page defined`);
  }
  return testController.page;
};

/**
 * Return the runner context object or throw an error if not defined
 * @param {ITestController} testController The test controller which operates the test
 * @returns {BrowserContext} The context object
 * @throws {Error} If the context is not defined
 */
export const getContext = (testController: ITestController): BrowserContext => {
  if (!testController.context) {
    throw new Error(`No context defined`);
  }
  return testController.context;
};

setWorldConstructor(TestController);
