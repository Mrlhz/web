module.exports = {
  entry: './babel.js',
  mode: 'development',
  devtool: false,
  module: {
    rules: [{
      test: /\.js$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                useBuiltIns: 'usage'
              }
            ]
          ]
        }
      }]
    }]
  }
};