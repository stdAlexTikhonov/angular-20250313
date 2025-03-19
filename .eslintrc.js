module.exports = {
root: true,
plugins: ['@typescript-eslint', 'import'],
overrides: [
    {
    files: ['*.ts'],
    parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/stylistic',
        'plugin:@angular-eslint/recommended',
        'airbnb-typescript/base',
    ],
    rules: {
        '@angular-eslint/directive-selector': [
        'error',
        {
            type: 'attribute',
            prefix: 'app',
            style: 'camelCase',
        },
        ],
        '@angular-eslint/component-selector': [
        'error',
        {
            type: 'element',
            prefix: 'app',
            style: 'kebab-case',
        },
        ],
        '@typescript-eslint/brace-style': ['error', '1tbs'],
        '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
        '@typescript-eslint/comma-spacing': ['error', { before: false, after: true }],
        '@typescript-eslint/func-call-spacing': ['error', 'never'],
        '@typescript-eslint/indent': ['error', 2],
        '@typescript-eslint/keyword-spacing': ['error', { before: true, after: true }],
        '@typescript-eslint/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        '@typescript-eslint/no-extra-semi': 'error',
        '@typescript-eslint/space-before-blocks': 'error',
        '@typescript-eslint/no-throw-literal': 'error',
        '@typescript-eslint/quotes': ['error', 'single', { allowTemplateLiterals: true }],
        '@typescript-eslint/semi': ['error', 'always'],
        '@typescript-eslint/space-before-function-paren': ['error', {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always'
        }],
        '@typescript-eslint/space-infix-ops': 'error',
        '@typescript-eslint/object-curly-spacing': ['error', 'always'],
        'import/extensions': ['error', 'ignorePackages', {
            js: 'never',
            ts: 'never'
        }],
        'import/no-extraneous-dependencies': ['error', {
            devDependencies: ['**/*.spec.ts', '**/test/**/*.ts']
        }],
    },
    },
    {
    files: ['*.html'],
    extends: [
        'plugin:@angular-eslint/template/recommended',
        'plugin:@angular-eslint/template/accessibility',
    ],
    rules: {},
    },
],
};

