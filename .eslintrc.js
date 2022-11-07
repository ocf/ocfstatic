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
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "import/no-anonymous-default-export": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": "typescript",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
    },
    {
      files: [".eslintrc.*js", ".lintstagedrc.*js"],
      parser: "espree",
      env: {
        node: true,
        es6: true,
        browser: false,
      },
      rules: {
        "import/no-anonymous-default-export": "off",
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
