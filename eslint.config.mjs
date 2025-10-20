import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import _import from 'eslint-plugin-import';
import globals from 'globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const commonConfig = [
  {
    ignores: ['**/jest.config.js', '**/esm/*', '**/*.md', '**/*.tsbuildinfo'],
  },
  ...fixupConfigRules(
    compat.extends(
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:@typescript-eslint/recommended',
      'plugin:import/typescript',
      'prettier',
    ),
  ),
  {
    plugins: {
      import: fixupPluginRules(_import),
      '@typescript-eslint': fixupPluginRules(typescriptEslint),
    },

    languageOptions: {
      globals: {
        ...globals.node,
      },

      parser: tsParser,
      ecmaVersion: 5,
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          modules: true,
          jsx: true,
        },
      },
    },

    settings: {
      'import/resolver': {
        'eslint-import-resolver-typescript': true,

        typescript: {
          project: '../*/tsconfig.json',
        },

        node: true,
      },
    },

    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports' },
      ],
      '@typescript-eslint/ban-ts-comment': 0,
      'linebreak-style': 0,
      curly: [2, 'all'],
      'arrow-body-style': [2, 'as-needed'],
      'sort-keys': 0,
      'no-underscore-dangle': 0,
      'no-await-in-loop': 0,
      'no-return-await': 2,
      'no-console': 1,

      'no-param-reassign': [
        2,
        {
          props: true,
        },
      ],

      'no-promise-executor-return': 2,
      'no-use-before-define': 2,
      '@typescript-eslint/no-explicit-any': 2,
      '@typescript-eslint/prefer-interface': 0,
      '@typescript-eslint/dot-notation': 0,
      '@typescript-eslint/no-implied-eval': 0,
      '@typescript-eslint/no-throw-literal': 0,
      '@typescript-eslint/return-await': 0,
      '@typescript-eslint/no-unnecessary-condition': 0,
      '@typescript-eslint/explicit-module-boundary-types': 0,
      '@typescript-eslint/no-redeclare': 2,

      '@typescript-eslint/consistent-type-assertions': [
        2,
        {
          assertionStyle: 'as',
          objectLiteralTypeAssertions: 'never',
        },
      ],

      'sort-imports': [
        1,
        {
          ignoreDeclarationSort: true,
          ignoreCase: true,
        },
      ],

      'import/order': [
        1,
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',

          pathGroups: [
            {
              pattern: '@gaming1/**',
              group: 'external',
              position: 'after',
            },
          ],

          pathGroupsExcludedImportTypes: ['builtin'],

          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],

      'no-duplicate-imports': 1,
      'import/no-extraneous-dependencies': 2,
      'import/no-duplicates': 0,
      //  '@typescript-eslint/no-unused-expressions': 'off',
      'no-restricted-imports': [
        'error',
        {
          paths: ['import1', 'import2'],
        },
      ],

      'global-require': 2,
      'import/no-dynamic-require': 2,
      'no-unneeded-ternary': 2,
      indent: 0,
      '@typescript-eslint/indent': 0,
      'import/no-unresolved': 0,
      'import/named': 0,
      'import/default': 0,
      'import/no-named-as-default': 0,
      'import/no-named-as-default-member': 0,
      'import/namespace': 0,
      'no-redeclare': 0,
      'import/no-cycle': 0,
      'import/no-self-import': 0,
      'import/export': 0,
      'import/no-relative-packages': 0,
      'import/extensions': 0,
    },
  },
  {
    files: ['**/*.js', '**/*.cjs'],

    languageOptions: {
      ecmaVersion: 5,
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          modules: true,
          jsx: true,
        },

        project: false,
      },
    },

    rules: {
      'import/extensions': 0,
      'import/no-default-export': 0,
    },
  },
];

export default commonConfig;
