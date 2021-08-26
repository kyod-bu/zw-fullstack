const { resolve } = require('path');
// const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    context: resolve('./src'),
    entry: {
        'app': './app.ts',
        'pages/index/index': './pages/index/index.ts',
        'pages/logs/logs': './pages/logs/logs.ts',
    },
    output: {
        path: resolve('dist'),
        filename: '[name].js'
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false,
        }),
        new CopyWebpackPlugin([
            {
              from: resolve('./src'),
              to: resolve('./dist'),
              ignore: ['*.js', '*.ts', '*.scss']
            },
          ]),
    ],
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
        ]
    },
    // node: {
    //     fs: 'empty'
    // },
    // performance: {
    //     hints: false
    // }
}
