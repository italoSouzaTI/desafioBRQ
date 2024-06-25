module.exports = {
  plugins: [
    [
      "module-resolver",
      {
        //ROOT de onde o plugins começaá a verificar as pastas do projeto podendo ser src ou somente .
        root: ["./src"],
        alias: {
          "@shared": "./src/shared", // ex: alias:caminho da pasta
        },
        extensions: [".tsx", ".ts"], // extensões que ele deve enxergar
      },
    ],
  ],
  presets: ["module:@react-native/babel-preset"],
};
