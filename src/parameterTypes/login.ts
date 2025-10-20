import { defineParameterType } from '@cucumber/cucumber';

import { type LoginField, loginFields } from '../types/login.ts';

export const loginField = () =>
  defineParameterType({
    name: 'loginField',
    regexp: loginFields,
    transformer: (loginField): LoginField => loginField as LoginField,
  });
