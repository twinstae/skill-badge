/** @type {import('@types/eslint').Linter.BaseConfig} */
module.exports = {
  extends: [
    '@remix-run/eslint-config',
    '@remix-run/eslint-config/node',
    '@remix-run/eslint-config/jest-testing-library',
  ],
  env: {
    'cypress/globals': true,
  },
  plugins: ['cypress', 'unicorn'],
  settings: {
    jest: {
      version: 28,
    },
  },
  rules: {
    'testing-library/no-await-sync-events': 'off',
    'testing-library/prefer-screen-queries': 'off'
  },
};
