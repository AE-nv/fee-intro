import js from "@eslint/js";

export default [
  {
    ignores: ["node_modules/**", ".next/**", "out/**", "build/**"],
  },
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.mjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        document: "readonly",
        window: "readonly",
        console: "readonly",
        process: "readonly",
        __dirname: "readonly",
      },
    },
    rules: {
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    },
  },
  {
    files: ["server.js"],
    languageOptions: {
      globals: {
        Buffer: "readonly",
      },
    },
  },
];
