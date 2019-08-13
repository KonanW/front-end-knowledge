module.exports = {
  entry: "./index.js",
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          'html-laoder',
          {
            laoder: require.resolve('../index.js'),
            options: {
              simplifiedAutoLink: true,
              tables: true,
            }
          }
        ]
      }
    ]
  }
}