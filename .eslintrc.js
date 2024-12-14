module.exports = {
    root: true, // Specify the root config to prevent ESLint from traversing parent folders
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    parser: '@typescript-eslint/parser', // TypeScript parser
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true, // Enable JSX for React
        },
    },
    extends: [
        'eslint:recommended', // ESLint recommended rules
        'plugin:@typescript-eslint/recommended', // TypeScript-specific rules
        'plugin:prettier/recommended', // Integrates Prettier with ESLint
    ],
    plugins: [
        '@typescript-eslint', // Adds TypeScript linting
        'prettier', // Prettier plugin
    ],
    rules: {
        // TypeScript-specific rules
        '@typescript-eslint/no-unused-vars': [
            'error',
            { argsIgnorePattern: '^_' },
        ], // Ignore unused variables prefixed with _
        '@typescript-eslint/explicit-function-return-type': 'off', // Disable enforced function return types
        '@typescript-eslint/no-explicit-any': 'warn', // Warn against using `any`

        // Prettier integration
        'prettier/prettier': 'error', // Treat Prettier formatting issues as errors

        // Optional: Additional ESLint rules
        'no-console': 'warn', // Warn on console.log
        'no-debugger': 'error', // Disallow debugger statements
        'import/order': [
            'error',
            {
                groups: [
                    'builtin',
                    'external',
                    'internal',
                    'parent',
                    'sibling',
                    'index',
                    'object',
                ],
                'newlines-between': 'always',
            },
        ],
    },
    settings: {
        react: {
            version: 'detect', // Automatically detect the React version
        },
    },
};
