module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-preset-env": { stage: 1 },
    tailwind: {},
    cssnano: {},
    stylelint: {},
    "postcss-reporter": { clearReportedMessages: true }
  }
};
