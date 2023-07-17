module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@ui": "./components/ui",
            "@constants": "./constants",
            "@_types": "./types",
            "@hooks": "./components/hooks",
            "@store": "./store",
          },
        },
      ],
    ],
  };
};
