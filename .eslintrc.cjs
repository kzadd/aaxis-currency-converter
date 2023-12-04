module.exports = {
  env: { browser: true, es2021: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'standard',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  overrides: [
    {
      env: { node: true },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: { sourceType: 'script' }
    },
    {
      files: ['src/**/*.styles.{js,jsx}'],
      rules: { 'no-unused-vars': 'off', 'react/prop-types': 'off' }
    }
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react', 'import', 'jsx-a11y', 'react-hooks', 'prettier'],
  root: true,
  rules: {
    'explicit-function-return-type': 'off',
    'no-explicit-any': 'off',
    'space-before-function-paren': 'off',
    'import/order': [
      'error',
      {
        alphabetize: { caseInsensitive: true, order: 'asc' },
        groups: ['builtin', 'external', 'internal'],
        'newlines-between': 'never',
        pathGroups: [
          { group: 'external', pattern: 'react', position: 'before' },
          {
            group: 'external',
            pattern: 'react-dom/client',
            position: 'before'
          },
          {
            group: 'external',
            pattern: 'react-router-dom',
            position: 'before'
          },
          { group: 'external', pattern: 'react-redux', position: 'before' }
        ],
        pathGroupsExcludedImportTypes: ['builtin']
      }
    ],
    'jsx-quotes': ['error', 'prefer-double'],
    'no-unused-vars': ['error', { args: 'after-used', ignoreRestSiblings: false, vars: 'all' }],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'quote-props': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: false,
        ignoreCase: true,
        noSortAlphabetically: false,
        shorthandFirst: false,
        shorthandLast: false
      }
    ],
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': ['error', { component: true, html: true }],
    'sort-keys': ['warn', 'asc', { caseSensitive: true, minKeys: 2, natural: true }],
    'space-before-function-paren': 'off'
  },
  settings: { react: { version: 'detect' } }
}
