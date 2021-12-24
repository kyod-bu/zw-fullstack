var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

var deleteFolder = function (path) {
    var files = [];
    if (fs.existsSync(path)) {
        files = fs.readdirSync(path);
        files.forEach(function (file, index) {
            var curPath = path + "/" + file;
            if (fs.statSync(curPath).isDirectory()) { // recurse
                deleteFolder(curPath);
            } else { //delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};
deleteFolder('../build/script/');
deleteFolder('../build/style/');
deleteFolder('../build/fonts/');
deleteFolder('../build/images/');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'app/index.jsx'),
        // 将 第三方依赖 单独打包
        vendor: [
            'react',
            'react-dom',
            'react-redux',
            'react-router-dom',
            'redux',
            'es6-promise',
            'whatwg-fetch',
            'prismjs',
            'fastclick'
        ]
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: "script/[name].[chunkhash:8].js",
        publicPath: "/",
        jsonpFunction: 'dianpingPlus',
        chunkFilename: "script/[name].[chunkhash:8].js"
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },
}
