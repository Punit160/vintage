module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    // Keep real bugs as errors; unused locals are cleaned over time
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    'no-unused-vars': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react-native/no-inline-styles': 'off',
    'react/no-unstable-nested-components': 'warn',
  },
};
