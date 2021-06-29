module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: { node: "current" },
        // modules: false,
      },
    ],
    "@babel/preset-react",
  ],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          src: "./src",
          tests: "./tests",
          ["@pages"]: "./src/pages",
          ["@components"]: "./src/components",
        },
      },
    ],
  ],
  ignore: ["node_modules/**"],
};
