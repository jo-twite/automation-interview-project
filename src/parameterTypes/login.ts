import { defineParameterType } from '@cucumber/cucumber';

import { login as loginTypes, typeValues } from '../types/index.ts';

defineParameterType({
  name: 'loginField',
  regexp: typeValues.loginFields,
  transformer: (loginField): loginTypes.LoginField =>
    loginField as loginTypes.LoginField,
});
