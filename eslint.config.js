import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import perfectionist from 'eslint-plugin-perfectionist';

export default [
  {
    files: ['**/*.{js,ts}'],
    ignores: ['node_modules/**'],
    plugins: {
      '@typescript-eslint': typescript,
      perfectionist,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...perfectionist.configs['recommended-natural'].rules,
      '@typescript-eslint/explicit-function-return-type': 'warn',
    },
  },
];
