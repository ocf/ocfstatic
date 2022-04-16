module.exports = {
  root: true,
  env: {
    browser: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:prettier/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
    },
    {
      files: [".eslintrc.js", "lint-staged.config.js"],
      parser: "espree",
      parserOptions: {
        sourceType: "script",
      },
      env: {
        node: true,
        es6: true,
        browser: false,
      },
    },
    {
      files: ["src/definitions/ocfapi.ts"],
      rules: {
        "@typescript-eslint/no-empty-interface": "off",
      },
    },
  ],
}
