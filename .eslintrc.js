// basic .eslintrc.js compatible with react prettier and typescript
module.exports = {
  // Specifies the ESLint parser for TypeScript
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    // Allow parsing modern ECMAScript features
    ecmaVersion: 2018,
    // Allow the use of imports
    sourceType: 'module',
  },
  rules: {
    // Disable prop-types (use TypeScript interfaces instead)
    'react/prop-types': 'off',
    // Enable prettier rules
    'prettier/prettier': 'warn',
    // Allow interfaces to start with capital I
    '@typescript-eslint/interface-name-prefix': 'off',
    // Allow @ts-ignore for testing purposes
    '@typescript-eslint/ban-ts-ignore': 'off',
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
};
