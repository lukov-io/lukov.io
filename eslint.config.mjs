import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt(
  {
    root: true,
    extends: [
      'plugin:vuejs-accessibility/recommended',
      'plugin:vue/vue3-essential',
      'eslint:recommended',
      '@vue/eslint-config-typescript',
      '@vue/eslint-config-prettier',
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {},
      parser: {
        ts: '@typescript-eslint/parser',
      },
    },
    plugins: [
      '@typescript-eslint',
      'vuejs-accessibility',
    ],
    files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
    rules: {
      'prefer-const': 'off',
      'indent': [
        'error',
        2,
        {
          SwitchCase: 1,
        },
      ],
      'constructor-super': 2,
      'no-case-declarations': 2,
      'no-class-assign': 2,
      'no-compare-neg-zero': 2,
      'no-cond-assign': 2,
      'no-console': [
        'error',
        {
          allow: [
            'error',
          ],
        },
      ],
      'no-const-assign': 2,
      'no-constant-condition': 2,
      'no-control-regex': 2,
      'no-debugger': 2,
      'no-delete-var': 2,
      'no-dupe-args': 2,
      'no-dupe-class-members': 2,
      'no-dupe-keys': 2,
      'no-duplicate-case': 2,
      'no-empty-character-class': 2,
      'no-empty-pattern': 2,
      'no-empty': 2,
      'no-ex-assign': 2,
      'no-extra-boolean-cast': 2,
      'no-extra-semi': 2,
      'no-fallthrough': 2,
      'no-func-assign': 2,
      'no-global-assign': 2,
      'no-inner-declarations': 2,
      'no-invalid-regexp': 2,
      'no-irregular-whitespace': 2,
      'no-mixed-spaces-and-tabs': 2,
      'no-new-symbol': 2,
      'no-obj-calls': 2,
      'no-octal': 2,
      'no-redeclare': 2,
      'no-regex-spaces': 2,
      'no-self-assign': 2,
      'no-sparse-arrays': 2,
      'no-this-before-super': 2,
      'no-undef': 2,
      'no-unexpected-multiline': 2,
      'no-unreachable': 2,
      'no-unsafe-finally': 2,
      'no-unsafe-negation': 2,
      'no-unused-labels': 2,
      'no-unused-vars': 2,
      'no-useless-escape': 2,
      'require-yield': 2,
      'space-before-function-paren': [
        'error',
        'never',
      ],
      'use-isnan': 2,
      'vars-on-top': 'error',
      'camelcase': [
        'error',
        {
          properties: 'never',
        },
      ],
      'no-empty-function': [
        'error',
        {
          allow: [
            'arrowFunctions',
            'functions',
            'methods',
          ],
        },
      ],
      'valid-typeof': 2,
      'id-length': [
        'error',
        {
          min: 2,
          exceptions: [
            'i',
          ],
        },
      ],
      'new-cap': [
        'error',
        {
          newIsCap: true,
          newIsCapExceptions: [],
          capIsNew: false,
          capIsNewExceptions: [
            'Immutable.Map',
            'Immutable.Set',
            'Immutable.List',
          ],
        },
      ],
      '@typescript-eslint/no-var-requires': 0,
    },
    features: {
      stylistic: true,
    },
    env: {
      es6: true,
      browser: true,
      amd: true,
    },
  },
)
