module.exports = {
  entry: "./index.js",
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          'html-loader',
          {
            loader: require.resolve('../index'),
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