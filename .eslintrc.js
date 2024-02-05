module.exports = {
    env: {
        node: true,
    },
    extends: ['plugin:prettier/recommended', 'eslint:recommended', 'next/core-web-vitals'],
    root: true,
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        'prettier/prettier': 'warn',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'no-async-promise-executor': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'jsx-a11y/alt-text': 'off',
    },
};
