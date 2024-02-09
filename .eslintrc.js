/** @type {import('eslint').Linter.Config} */
module.exports = {
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
    rules: {
        'prettier/prettier': 'warn',
        'react/display-name': 'off',
        'react/no-unescaped-entities': 'off',
        'import/no-anonymous-default-export': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
    },
    plugins: ['import'],
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
                project: ['./tsconfig.json'],
            },
        },
    },
};
