module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true
  },
  parserOptions: {
    // parser: "babel-eslint",
    // specifying a module sourcetype prevent eslint from marking import statements as errors
    // sourceType: "module"
    parser: "@typescript-eslint/parser"
  },
  extends: [
    // add more generic rulesets here, such as:
    "plugin:vue/recommended",
    "eslint:recommended",
    "plugin:prettier-vue/recommended",
    "prettier/vue",
    "plugin:@typescript-eslint/recommended"
    // "plugin:prettier/recommended"
  ],

  settings: {
    "prettier-vue": {
      SFCBlocks: {
        customBlocks: {
          "page-query": { lang: "graphql" },
          "statics-query": { lang: "graphql" }
        }
      }
    }
  },

  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  }
};
