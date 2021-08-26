const webpack = require('webpack');
const path = require('path');

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
    plugins: []
}
