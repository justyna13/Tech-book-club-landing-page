export default [
  {
    files: ['js/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        document: 'readonly',
        window: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
    },
  },
];
