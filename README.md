# Qc Interview Project

- [Qc Interview Project](#qc-interview-project)
  - [Required installs](#required-installs)
    - [Recommended extensions](#recommended-extensions)
  - [Goals of this test](#goals-of-this-test)
  - [Test structure](#test-structure)
    - [Typescript exercises](#typescript-exercises)
      - [How to run the exercises](#how-to-run-the-exercises)
    - [E2E exercise](#e2e-exercise)
      - [How to run the exercise](#how-to-run-the-exercise)
      - [How to do this exercise](#how-to-do-this-exercise)
      - [Useful documentation](#useful-documentation)
      - [Scenario definition](#scenario-definition)
        - [Titles](#titles)
        - [Step order and semantics](#step-order-and-semantics)
        - [Scenario implementation](#scenario-implementation)
      - [Guidelines](#guidelines)
        - [Cucumber](#cucumber)
        - [Scenario organization](#scenario-organization)
        - [Step naming](#step-naming)
  - [Coding guidelines](#coding-guidelines)
    - [Typing](#typing)
    - [Naming convention](#naming-convention)
    - [Documentation](#documentation)
    - [Add unit tests for all helper functions](#add-unit-tests-for-all-helper-functions)
    - [Avoid wildcard in cucumber regex](#avoid-wildcard-in-cucumber-regex)
    - [Avoid if/elseif and switch case statements](#avoid-ifelseif-and-switch-case-statements)
    - [Avoid disabling eslint rules](#avoid-disabling-eslint-rules)
    - [Use typescript for configuration](#use-typescript-for-configuration)
    - [Code reusability](#code-reusability)
    - [Import and export convention](#import-and-export-convention)
      - [Detailed call](#detailed-call)
      - [Importing and exporting types](#importing-and-exporting-types)
      - [Barrel files](#barrel-files)
  - [About using AI to generate code](#about-using-ai-to-generate-code)

---

In this documentation you'll find all information about required softwares which need to be installed, coding guidelines and explanation about some part of the e2e testing.

It is **highly** recommended to read it **carefully** before jumping on the code.

## Required installs

To start, you will need:

- [Git bash](https://git-scm.com/downloads)
- [NodeJS](https://nodejs.org/en/) (LTS version for stability)
- [Yarn](https://classic.yarnpkg.com/en/docs/install#windows-stable)
- [Visual Studio Code](https://code.visualstudio.com/)

Once you have cloned the repository and installed all the tools, you can open a terminal and use

```bash
yarn
```

It will install all the required packages.

⚠️ If you have some of the tools already installed, be sure they have the right version. ⚠️

To be sure everything is working you can also run the following commands:

```bash
yarn build
```

No error should be displayed on the terminal and a `esm` folder containing **js files** built upon the **ts files** in the `src` folder.

To check if you can launch the different exercises you can run the following commands:

```bash
yarn ex1
```

It should run vitest on the file `exercise1.ts` whit some test failing and some succeeding.

```bash
yarn ex4
```

It should briefly open a **chromium** window and in the terminal you should have the information about 1 test passing.

⚠️ If you don't have the same playwright version as the one of the project, you'll be asked to install it with the command:

```bash
yarn playwright install
```

### Recommended extensions

Here is a list of recommended **VS code extension** you should install:

- **Vitest** (to be able to launch test one by one without using the command)
- **ESLint** to have eslint checking your file in real time
- **Prettier** to have the auto formatting on your code (be sure to configure it to apply on file save at least). If you don't manage to format your code in real time with extension you can also use the command:

```bash
yarn format
```

Which will check and format all **ts** files.

## Goals of this test

This test is not only there to see if you can complete all the asked tasks but also to check how you handle their implementation in terms of solution, structure and code quality. Some coding guidelines can be found in this file and can help you for your solution implementation.

## Test structure

As said above, the test is divided into two parts: the first focusing on typescript and the second on e2e testing. The way to run the exercises result is also different for each part. All the commands can be found in `package.json` file.

### Typescript exercises

Each task of the first three exercises will ask you to make some tests pass. The expected result **must not** be modified. The solution you'll provide will have to return the exact same result.

You'll find instruction headed of each task.

All code related to three first exercises should be put into the `exercises` folder.

If you need some help on code implementation don't hesitate to check the [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) and [Typescript](https://www.typescriptlang.org/docs/) documentation.

⚠️ As the goal of the test is to evaluate your skill level, don't use external packages to do some part of your code even if they provide the solution you want. If you really need to use another package than the provided ones, add a comment before the line when you'll use it to explain why you couldn't implement a solution without it. ⚠️

#### How to run the exercises

The typescript exercises are divided into three files and ran with `vitest`.
Each file can be ran separately with the commands:

```bash
yarn ex1
yarn ex2
yarn ex3
```

They all also can be ran at the same time with the command:

```bash
yarn ex:all
```

To check the eslint error and warning in your exercises you can use the command:

```bash
yarn ex:eslint
```

And finally they can be ran in `watch mode` (which will reran all tests after every file modification) with the command:

```bash
yarn ex:watch
```

### E2E exercise

The e2e exercise focuses on implementing test cases using gherkin/cucumber, playwright, and typescript. The typescript part is less complicated than the other exercises, the goal here being to check how you handle test writing. The main exercise file with the **tasks** is in the folder `src/features`.

#### How to run the exercise

The first thing to take into account before running the tests is that your typescript code will need to be built. Which means, no typescript or eslint error should remain. To build your code you can use the command:

```bash
yarn build
```

To check the eslint error and warning during the build you can also use the command:

```bash
yarn build:eslint
```

Then you can launch the tests with the command:

```bash
yarn ex4
```

This will launch every test of the fourth exercise.

#### How to do this exercise

The fourth exercise will ask you to write e2e test cases. To do so, you'll have to **write** the test cases in **proper english** in the [exercise4.feature](./src/features/exercise4.feature) file and then implement the steps into the [exercise4.ts](./src/steps/exercise4.ts) file.

#### Useful documentation

[Playwright](https://playwright.dev/docs/intro) was created specifically to accommodate the needs of end-to-end testing. Playwright supports all modern rendering engines including Chromium, WebKit, and Firefox. Test on Windows, Linux, and macOS, locally or on CI, headless or headed with native mobile emulation of Google Chrome for Android and Mobile Safari.

[Locators](https://playwright.dev/docs/api/class-locator) are used to defined the elements which with the test will interact. They use [CSS selectors](https://www.w3schools.com/cssref/css_selectors.php)

[CucumberJs](https://cucumber.io/docs/guides/) is a tool that supports Behavior-Driven Development(BDD). If you’re new to Behavior-Driven Development read our BDD introduction first.

[Cucumber Expressions](https://github.com/cucumber/cucumber-expressions#readme) are used to define more complex steps with parameters.

ITestController is the object that allow the tests to access to the page and it's context.

#### Scenario definition

A pretty big part of this section is learning how to define `Cucumber` scenarios.
The main purpose of those scenario are to act as documentation about how the
tested page/feature behaves.

##### Titles

As they can be used as documentation, scenarios are required to have a clear and
explicit title. The real trick is to also keep it as concise as possible.

##### Step order and semantics

You are expected to figure out how, why and when to use the different kinds of Steps that
`Cucumber` has to offer. Those steps are `Given`, `When` and `Then`.

##### Scenario implementation

Test automation would be worthless without scripting. Aside from getting
familiar with the libraries that are at you disposal in this project, you will
also need to demonstrate some understanding of Typescript.

#### Guidelines

##### Cucumber

As previously stated, `Cucumber` offers three types of steps.

- `Given` corresponds to the **prerequisites** of your scenario, the starting point of
  the actual test
- `When` corresponds to the **actions** that are going to be taken by the
  user/script, the feature that is being tested
- `Then` corresponds to the **results** that are expected, the output of the test

Several steps of the same type may be linked by replacing their keyword with
`And` or `But`

```gherkin
Given something
And something else
When the user does one thing
But the user doesn't do the other thing
```

##### Scenario organization

As a rule, when building a _set_ of scenarios, it is better to build them on top
of each other.

For instance:

```gherkin
Scenario: Login form accessibility
    Given the website is displayed
    When the user clicks on the login button
    Then the login form should be displayed

Scenario: User login
    Given the login form is displayed
    When the user validates their credentials
    Then the user should be logged
```

The logic used in the first scenario can be reused for the first step of the
second scenario. Furthermore, working that way ensures that most "complicated"
steps are explained in detail by a previous scenario.

However, keep in mind that those two tests are not dependent, they can both run
successfully without the other. Keeping tests _isolated_ is really important.

##### Step naming

One thing that is tricky with `Gherkin`/`Cucumber` is that a step that is
declared in the code as a `Given` can actually be used as any kind of step
(Given, When or Then)

This is explained in the documentation from Cucumber as a way to force
developers to write steps with a name that cannot grammatically be reused with
other kinds of steps.

The result that we reached in our package is that:

- `Prerequisites / Given` describe the state of the page. As such, it should most
  of the time be expressed in the past tense, or the passive voice of the present
  tense.

  ```gherkin
  Given the page is displayed

  # OR

  Given the user opened the page
  ```

- `Actions / When` describe the action that's being tested. As such, it should
  most of the time be expressed in the active voice of the present tense.
  Refrain from using the word "try" because it makes it seem like the
  documentation expects the action to fail (you may use it if the action is
  indeed _supposed_ to fail)

  ```gherkin
  # neutral
  When the user opens the page

  # failure is implicitly expected
  When the user tries to open the page
  ```

- `Results / Then` describe the expected outcome of the action. As such, it
  should most of the time use the cautious form "should" or "shouldn't"

  ```gherkin
  Then the page should be displayed
  ```

## Coding guidelines

In order to comply to our coding rules, here are some guidelines you should try to follow.

### Typing

As typescript allows you to type element and as this feature can ease your way of coding and improve readability, there should be no element with "no type". Your variables should always be typed and you'll should always create types for your object structures. Remember that the **any** should be avoided as much as possible.

Don't forget to also type the return of your function (not for steps function).

### Naming convention

- All code and documentations should be written in proper English.

- All variables, constants and functions but configurations should be written in camel case.
  For the configurations write all in capital letters with words separated by underscore.

- All enums should start with a `E` (but try to avoid using them).

- All types should be written in pascal case.

  E.g.:

  ```typescript
  // This is a configuration
  const TEST_CONFIGURATION = {
  BASE_TIMEOUT: 5000;
  };

  // This is not configuration
  const getAdditionalTimeout = (timeout:number) => {
    const { BASE_TIMEOUT } = TEST_CONFIGURATION
    const totalTimeout = timeout + BASE_TIMEOUT
    return totalTimeout;
  }
  ```

- Boolean parameters must be named starting with one of the following verbs: `is`, `has`, `can`, `was`, `contains`, `should`, `does`. These verbs should reflect the action or state influenced by the parameter's value.

  E.g.:
  - If your boolean indicate if an element should be displayed or not, it could be named : `isDisplayed`
  - If your boolean indicate that an element has some children or not, it could be named: `hasChildren`

- All functions should indicate their main goal in their name. For instance, a function to get user information should be named: `getUserInformation`

### Documentation

All helpers functions should have a **jsdoc** to explain their utility and to describe their parameters and returned value (https://jsdoc.app/).

E.g:

```typescript
/**
 * Formats a date to usable string
 * @param {Date} date the date to format
 * @param {Object=} options the options for the date formatting (optional)
 * @param {string} options.sectionSymbol the symbol used to separate the date parts (optional, will be '/' by default)
 * @param {boolean} options.useMiddleEndianFormat the format of the date (optional, will be false by default):
 * - If false it would be DD-MM-YYYY
 * - If true it would be MM-DD-YYYY
 * @param {boolean} options.needTimeInformation if true, the hours, minutes, and seconds will also be returned in the
 * formatted string
 * @return {string} a string containing the formatted date
 */
```

Be explicit in your documentation and don't hesitate to give details.

### Add unit tests for all helper functions

Each helper function should have some unit tests to cover it's behavior. Unit tests should be use in a file with the same name as the one they are testing with an additional `.test`. So for `exercise.ts` the unit test file should be `exercise.test.ts`.

⚠️ As this repository is divided into two parts, there is two command to launch the unit tests ⚠️:

- The one defined in the `exercises` folder can be ran with the command:

```bash
yarn test:ex
```

- The one defined in the `src` folder can ben ran with the command:

```bash
yarn test
```

### Avoid wildcard in cucumber regex

The wildcard character `(.+)` can lead to loss of performance and into wrong step selection. Avoid using it unless you don't have any other choice. Take advantage of the [cucumber expressions](https://github.com/cucumber/cucumber-expressions#readme). This point will be explained in detail below.

### Avoid if/elseif and switch case statements

Big conditionals statements are hardly maintainable and make the code hard to read (it's even worse if you have several imbricated statements). In some cases, if/else statements can be useful but if you are starting to have a big structure with several elseif or a switch case, maybe it would be better to map your conditions on an object.

E.g.:

```typescript
switch (parameter) {
  case 'value1':
    // Do some stuff
    break;
  case 'value2':
    // Do some stuff
    break;
  case 'value3':
    // Do some stuff
    break;
  default:
    throw Error(`You didn't pass a correct value`);
}
```

Can be replaced by:

```typescript
const parameterFunctions = {
  value1: function1,
  value2: function2,
  value3: function3,
};
if (!parameterFunctions[parameter]) {
  throw Error(`You didn't pass a correct value`);
}
parameterFunctions[parameter]();
```

Another thing to avoid is the if/else hell or having imbricated if/else statement, sometimes it can be useful to invert conditions and modify how the code works.

E.g.:

```typescript
if (parameter === 'value1') {
  // Do some stuff
} else {
  throw Error(`You didn't pass a correct value`);
}
```

Can be replaced by:

```typescript
if (parameter !== 'value1') {
  throw Error(`You didn't pass a correct value`);
}

// Do some stuff
```

You can also replace if/else statement by ternary expression:

```typescript
if (parameter === 'value1') {
  function1();
} else {
  function2();
}
```

Can be replaced by:

```typescript
parameter === 'value1' ? function1() : function2();
```

### Avoid disabling eslint rules

Eslint rules are here for a reason. If you end up in a situation where you think you should disable one, maybe you should consider another solution. If at the end you have to disable it, then do it for the minimum amount of code (E.g: Disabling the rule only for one line) and add a comment to justify your choice:

```typescript
// As it's a configuration the name should be written in capital letters spaced by underscore.
/* eslint-disable @typescript-eslint/naming-convention */
export const EXERCISES_FOLDER_PATH_FROM_RUNNER =
  '../qc-testing-training/src/exercises';
/* eslint-enable @typescript-eslint/naming-convention */
```

⚠️ Note that some build and exercises command have a eslint checks which will be used to run your content at the end.⚠️

### Use typescript for configuration

As typescript allows us to type data and to process some code, it's better to use this format for configuration files when it's possible.

### Code reusability

When writing your code you should always keep in mind the reusability factor.
It's divided in two parts:

- Each function and step should have only one responsibility
- Writing code that can be reused: If you think you code could be reused then make it dynamic
- Never duplicate large amount of code: If you are copying part of existing code, you should put this part into a function to be called in both your code and the original one
- Note that you can move some functions and types which are in the exercises files in other files to have a better structure

### Import and export convention

⚠️ As this project as an esm module build configuration and as node doesn't handle yet the implicit extension you'll have to add the extension `.ts` at the end of your import/export (as it would be the extension of your built file). For import/export from index you'll have to add explicitly the `index.ts` in the import/export statement ⚠️:

```typescript
import * as date from './date.ts';
import utils as utilsTypes from '../types/index.ts';
```

#### Detailed call

To improve the [tree-shaking](https://webpack.js.org/guides/tree-shaking/) and avoid issue linked to circular dependency, detailed calls for import and export are to be favoured.

Inside a package every element should be imported and exported individually from it's origin file.

```typescript
import { function1, function2 } from './helpers/helper1.ts';

import { CONFIG1 } from '../configurations/config.ts';
```

For import from another package it will look like this:

```typescript
import { type Type1, CONFIG1, helper1 } from '@repo/package';
```

#### Importing and exporting types

When you want to import or export types, there is an additional rule to apply: you have to use the keyword **type**. For the export this rule is enforced by the **tsconfig's isolatedModules**. For import it's the **eslint's @typescript-eslint/consistent-type-imports** rule which handle it.

```typescript
// Imports
import type { Type1, Type2 } from './type.ts';
import { type Type3, config } from './configType.ts';

// Exports
export type { Type1, Type2 } from './type.ts';
export { type Type3, CONFIG } from './configType.ts';
```

#### Barrel files

With detailed import used inside the package, no barrel file is needed. In fact you should only **one** file per package to be used as a barrel file which is the **main index.ts** file. This file should **centralize** all the exports from the package to the outside. **Configurations** and **types** should still be exported as detailed elements but **functions from helpers** should be group under **an object per helper**.

```typescript
export type { RemoveWhitespacesMode } from './types/common.ts';
export type { EmailPart, EmailParts } from './types/email.ts';

export {
  PATH_PARAMETER_IDENTIFIER,
  REQUEST_GROUP_INFORMATION,
  STATUS_CODE_VALUE,
  REQUEST_STATUS,
  REQUEST_TYPES,
} from './configurations/request.ts';

export {
  UNSERIALIZABLE_DATA_PLACEHOLDER,
  CHARACTER_TYPE_STRINGS,
} from './configurations/string.ts';

export * as array from './helpers/array.ts';
export * as email from './helpers/email.ts';
export * as number from './helpers/number.ts';
```

If not all element from an helper should be exported, then you'll first need to import the content to export and then export them wrapped in an object:

```typescript
import { getGeneratedString } from './helpers/stringGenerator.ts';
export const stringGenerator = {
  getGeneratedString,
};
```

## About using AI to generate code

Today it's tempting to use AI tools to generate code and it can be useful in some cases. But keep in mind you have to understand the generated code and be sure about how it works.

Also most of the tools will have no background knowledge of your project so the generated code wil always need to be modified a little bit.

In the context of this test, I recommend to avoid using AI to generate your code as it would not reflect your skill level.
