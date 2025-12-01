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
    ],
    plugins: [
        '@typescript-eslint',
        'react',
        'react-hooks',
        'import',
        'jsx-a11y',
    ],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'off',
        'import/prefer-default-export': 'off',
        'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
        'import/extensions': 'off',
    },
};
