const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'src/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: 
        process.env.NODE_ENV !== 'production' ? [{
          loader: "style-loader"
      }, {
          loader: "css-loader", options: {
            modules: true,
            localIdentName: '[local]--[hash:base64:5]'
          }
      }, {
          loader: "sass-loader", options: {
            modules: true,
            localIdentName: '[local]--[hash:base64:5]'
          }
      }
        ]
        : [ MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: '[path][name].[ext]'
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
  }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html'
    })
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, ''),
    port: 8080,
    clientLogLevel: 'error',
    historyApiFallback: true
  }
};
