const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  devServer: {
    contentBase: "./build",
    proxy: {
      '/fruit': {
        'target': 'https://www.fruityvice.com/api',
        'secure': false,    
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve('./src/index.html') }),
  ],
};