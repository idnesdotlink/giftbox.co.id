module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true
  },
  parserOptions: {
    parser: "babel-eslint",
    // specifying a module sourcetype prevent eslint from marking import statements as errors
    sourceType: "module"
  },
  extends: [
    // add more generic rulesets here, such as:
    "plugin:vue/recommended",
    "eslint:recommended",
    "prettier/vue",
    "plugin:prettier/recommended"
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  }
};
