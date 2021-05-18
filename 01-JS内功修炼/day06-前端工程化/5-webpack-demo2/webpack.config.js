/**
 * webpack 的配置文件
 */
const path = require('path');
module.exports = {
    mode: 'none',
    entry: {
        index: './index.js',
        index2: './index2.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: 'dist/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
    optimization: {
        splitChunks: {
            chunks: 'all', // async, init
            minSize: 0
        }
    }
};
