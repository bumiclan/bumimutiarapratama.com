module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    'tailwindcss/no-custom-classname': 'off',
  },
  overrides: [
    {
      files: ['src/**/*.vue'],
      rules: {
        'vue/multi-word-component-names': 0,
      },
    },
  ],
};
