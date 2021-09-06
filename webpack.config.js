const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '/dist'),
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
//   devServer: {
//     proxy: {
//         '/fruit': {
//             'target': 'https://www.fruityvice.com/api',
//             'secure': false,    
//         }
//     },
//     headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Headers': '*',
//         'Access-Control-Allow-Methods': '*',
//     }
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
};