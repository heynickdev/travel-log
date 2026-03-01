import antfu from "@antfu/eslint-config";
// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  antfu(
    {
      type: "app",
      vue: true,
      typescript: true,
      formatters: true,
      stylistic: {
        indent: 2,
        semi: false,
        quotes: "double",
      },
      ignores: [".pnpm-store/**", "**/migrations/*"],
    },
    // Global rules that are safe to run on any file type
    {
      rules: {
        "no-console": ["warn"],
        "node/prefer-global/process": ["off"],
        "node/no-process-env": ["error"],
        "unicorn/filename-case": [
          "error",
          {
            case: "kebabCase",
            ignore: ["README.md"],
          },
        ],
      },
    },
    // Code-specific rules strictly scoped away from Markdown/JSON
    {
      files: ["**/*.js", "**/*.ts", "**/*.jsx", "**/*.tsx", "**/*.vue"],
      rules: {
        "vue/max-attributes-per-line": [
          "error",
          {
            singleline: {
              max: 4,
            },
            multiline: {
              max: 2,
            },
          },
        ],
        "ts/no-redeclare": "off",
        "ts/consistent-type-definitions": ["error", "type"],
        "antfu/no-top-level-await": ["off"],
        "perfectionist/sort-imports": [
          "error",
          {
            tsconfig: {
              rootDir: ".",
            },
          },
        ],
      },
    },
  ),
);
