module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'next',
    'next/core-web-vitals',

    // Prettier (важливо, ставимо завжди в кінці)
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'import', 'jsx-a11y'],
  rules: {
    // Next.js не вимагає React у scope
    'react/react-in-jsx-scope': 'off',

    // Часто заважають у реальних проєктах
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',

    // Дозволяємо tsx
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
  },
};
