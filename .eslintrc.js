module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: { ecmaVersion: 6 },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
    "plugin:gridsome/recommended",
    "prettier",
    "prettier/vue"
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  }
};
