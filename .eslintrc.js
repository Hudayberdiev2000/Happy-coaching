module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser for TypeScript
  parserOptions: {
    ecmaVersion: 2021, // Allows for parsing modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  env: {
    browser: true, // Enable browser global variables
    es2021: true, // Use ECMAScript 2021 globals
    node: true, // Enable Node.js global variables and Node.js scoping
  },
  root: true, // Make sure ESLint config is only applied to the current project
  extends: [
    'eslint:recommended', // Use ESLint's recommended rules
    'next', // Use Next.js's default ESLint rules
    'next/core-web-vitals', // Use Core Web Vitals rules for performance and SEO in Next.js
    'plugin:@typescript-eslint/recommended', // Use recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:react/recommended', // Use recommended rules for React
    'plugin:react-hooks/recommended', // Enforce the rules of Hooks
    'plugin:storybook/recommended', // Add Storybook-specific linting rules
    'plugin:prettier/recommended', // Enables Prettier and displays Prettier errors as ESLint errors
    'plugin:storybook/recommended', // Enables Prettier and displays Prettier
  ],
  plugins: [
    '@typescript-eslint', // Provides rules for TypeScript
    'react', // Provides React-specific linting rules
    'react-hooks', // Linting rules for React hooks
    'storybook', // Storybook-specific rules
    'prettier', // Integrates Prettier as an ESLint plugin
  ],
  rules: {
    // JavaScript & General Rules
    'no-var': 'warn', // Warn on using var (prefer const or let)
    'prefer-const': 'warn', // Prefer const over let for variables that don’t change
    'no-unused-vars': 'warn', // Warn on unused variables

    // TypeScript-Specific Rules
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Ignore unused variables with underscore
    '@typescript-eslint/explicit-function-return-type': 'off', // Disable forcing explicit return types in TypeScript
    '@typescript-eslint/no-explicit-any': 'warn', // Warn on using 'any' type in TypeScript
    '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'], // Enforce the use of interfaces over type aliases

    // React-Specific Rules
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.jsx', '.tsx'] }, // Only allow JSX in .jsx and .tsx files
    ],
    'react/jsx-fragments': ['warn', 'syntax'], // Prefer shorthand <></> for React fragments
    'react/react-in-jsx-scope': 'off', // Turn off React in scope rule, as it's unnecessary in Next.js

    // React Hooks Rules
    'react-hooks/rules-of-hooks': 'error', // Enforce the rules of hooks
    'react-hooks/exhaustive-deps': 'warn', // Warn on missing dependencies in useEffect

    // Prettier Rules
    'prettier/prettier': 'warn', // Show Prettier issues as warnings
  },
  overrides: [
    {
      files: ['**/*.stories.tsx', '**/*.stories.ts'], // Storybook-specific files
      rules: {
        // Storybook files often have relaxed rules
        'import/no-anonymous-default-export': 'off', // Allow anonymous default exports in story files
      },
    },
  ],
  settings: {
    react: {
      version: 'detect', // Automatically detect the version of React to use
    },
  },
};
