// eslint.config.mjs
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";

// плагин для порядка импортов (совместимый с flat)
import importX from "eslint-plugin-import-x";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // общие настройки под ESM
  {
    plugins: { "import-x": importX },
    rules: {
      // чистота кода
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "error",
      "no-unused-vars": ["warn", { vars: "all", args: "after-used", ignoreRestSiblings: true }],

      // порядок импортов
      "import-x/order": ["warn", {
        "groups": ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"],
        "newlines-between": "always",
        "alphabetize": { order: "asc", caseInsensitive: true }
      }],

      // хуки React
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
];
