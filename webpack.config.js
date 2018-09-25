const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'src/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
        }),
    ],

    devServer: {
        contentBase: path.join(__dirname, ''),
        port: 8080,
        clientLogLevel: 'error',
        historyApiFallback: true
    }
};