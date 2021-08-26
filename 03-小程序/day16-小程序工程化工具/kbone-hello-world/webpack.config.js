const path = require('path');
const webpack = require('webpack');

// kbone 自带的插件
const MpPlugin = require('mp-webpack-plugin')

module.exports = {
    mode: "production",
    // entry: "./src/index.js",
    entry: {
        index: path.resolve(__dirname, './src/index.js')
    },
    output: {
        // filename: "output.js",
        path: path.resolve(__dirname, './build/mp/common'),
        filename: "[name].js",
        library: 'createApp',
        libraryExport: 'default',
        libraryTarget: 'window'
    },
    target: 'web',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.isMiniprogram': process.env.isMiniprogram, // 注入环境变量，用于业务代码判断
        }),
        new MpPlugin(require('./config'))
    ]
}
