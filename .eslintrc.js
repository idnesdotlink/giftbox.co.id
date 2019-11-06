module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  parserOptions: {
    parser: "babel-eslint",
    // specifying a module sourcetype prevent eslint from marking import statements as errors
    sourceType: "module"
  },
  extends: [
    // add more generic rulesets here, such as:
    "eslint:recommended",
    "plugin:vue/recommended"
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  }
};
