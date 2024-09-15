export default {
  printWidth: 100,
  endOfLine: "auto",
  bracketSameLine: true,
  arrowParens: "avoid",
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
