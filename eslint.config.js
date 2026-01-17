import stylistic from "@stylistic/eslint-plugin";
import typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import perfectionist from "eslint-plugin-perfectionist";

export default [
  {
    files: ["**/*.{js,ts}"],
    ignores: ["node_modules/**", "dist/**", "releases/**"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
    },
    plugins: {
      "@stylistic": stylistic,
      "@typescript-eslint": typescript,
      perfectionist,
    },
    rules: {
      // TypeScript rules
      ...typescript.configs.recommended.rules,
      "@typescript-eslint/explicit-function-return-type": "warn",

      // Perfectionist sorting rules
      ...perfectionist.configs["recommended-natural"].rules,

      "@stylistic/array-bracket-spacing": ["error", "never"],
      "@stylistic/arrow-parens": ["error", "always"],
      "@stylistic/arrow-spacing": ["error", { after: true, before: true }],
      "@stylistic/brace-style": ["error", "1tbs", { allowSingleLine: true }],
      "@stylistic/comma-dangle": ["error", "always-multiline"],
      "@stylistic/comma-spacing": ["error", { after: true, before: false }],
      "@stylistic/computed-property-spacing": ["error", "never"],
      "@stylistic/eol-last": ["error", "always"],
      "@stylistic/function-call-spacing": ["error", "never"],
      // Stylistic formatting rules (matching Prettier config)
      "@stylistic/indent": ["error", 2],
      "@stylistic/key-spacing": ["error", { afterColon: true, beforeColon: false }],
      "@stylistic/keyword-spacing": ["error", { after: true, before: true }],
      // Consistent spacing in interfaces and type definitions
      "@stylistic/lines-between-class-members": ["error", "always", {
        exceptAfterSingleLine: true,
      }],
      "@stylistic/max-len": ["error", {
        code: 80,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
      }],
      "@stylistic/member-delimiter-style": ["error", {
        multiline: {
          delimiter: "semi",
          requireLast: true,
        },
        singleline: {
          delimiter: "semi",
          requireLast: false,
        },
      }],
      "@stylistic/no-multi-spaces": "error",
      "@stylistic/no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 0 }],
      "@stylistic/no-trailing-spaces": "error",
      "@stylistic/object-curly-spacing": ["error", "always"],
      "@stylistic/quotes": ["error", "double", { avoidEscape: true }],
      "@stylistic/rest-spread-spacing": ["error", "never"],
      "@stylistic/semi": ["error", "always"],
      "@stylistic/space-before-blocks": ["error", "always"],
      "@stylistic/space-before-function-paren": ["error", {
        anonymous: "always",
        asyncArrow: "always",
        named: "never",
      }],
      "@stylistic/space-in-parens": ["error", "never"],
      "@stylistic/space-infix-ops": "error",
      "@stylistic/template-curly-spacing": ["error", "never"],
      "@stylistic/type-annotation-spacing": ["error", {
        after: true,
        before: false,
      }],
    },
  },
  // Override for Zed types file - disable interface sorting to maintain logical grouping
  {
    files: ["src/generators/zed/types.ts"],
    rules: {
      "perfectionist/sort-interfaces": "off",
    },
  },
];
