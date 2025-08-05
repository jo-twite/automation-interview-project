// /!\ Do not modify this file /!\

const config = {
  require: [
    'esm/steps/**/*.js',
    'esm/testRunnerController/commonHooks.js',
    'source-map-support/register',
  ],
  format: ['@cucumber/pretty-formatter'],
  formatOptions: { snippetInterface: 'async-await' },
  publishQuiet: true,
  requireModule: ['ts-node/register'],
};
export default config;
