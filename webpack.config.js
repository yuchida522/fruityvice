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
      '/api/**': {
        'target': 'https://www.fruityvice.com/',
        'secure': false, 
        'changeOrigin': true   
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve('./src/index.html') }),
  ],
};