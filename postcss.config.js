module.exports = (NODE_ENV) => {
  return {
    plugins: [
      // ["stylelint"],
      ["postcss-preset-env",],
      ["postcss-reporter",
        { clearReportedMessages: true }
      ],
      ...NODE_ENV.mode === "production" ? ["cssnano"] : [],
    ],
  }
};