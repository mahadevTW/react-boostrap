const HtmlWebpackPlugin = require('html-webpack-plugin');
var config = {
  entry: './main.js',
  output: {
    path: '/',
    filename: 'index.js',
    path: __dirname + '/dist'
  },
  devServer: {
    inline: true,
    port: 8080
  },

  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader'
      },],

    },
      {
        test: /\.css?$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }],

      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './index.html', fileName: `__dirname/index.html`,alwaysWriteToDisk: true})
  ]
}
module.exports = config;