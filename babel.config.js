module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false,
        targets: {
          browsers: "> 1%"
        }
      }
    ]
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    ["@babel/plugin-proposal-decorators", { legacy: true }]
  ]
};
