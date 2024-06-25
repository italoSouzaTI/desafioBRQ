module.exports = {
  plugins: [
    [
      "module-resolver",
      {
        //ROOT de onde o plugins começaá a verificar as pastas do projeto podendo ser src ou somente .
        root: ["./src"],
        alias: {
          "@shared": "./src/shared",
          "@features": "./src/features",
          "@core": "./src/core",
          "@hooks": "./src/hooks",
          "@routes": "./src/routes",
        },
        extensions: [".tsx", ".ts"], // extensões que ele deve enxergar
      },
    ],
  ],
  presets: ["module:@react-native/babel-preset"],
};
