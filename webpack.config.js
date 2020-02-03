const path = require('path');
require('dotenv').config();

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
    publicPath: '/build/',
  },
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'url-loader',
      },
    ],
  },
};
