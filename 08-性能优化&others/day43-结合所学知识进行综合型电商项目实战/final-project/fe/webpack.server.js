var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'app/index.jsx'),
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
        path: __dirname + "./public",
        filename: "script/[name].[hash:8].js",
        publicPath: "/",
        chunkFilename: "script/[name].[chunkhash:8].js"
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    // use: 'css-loadermodules&localIdentName=[local]=[hash:base64:8]!resolve-url-loader!pos-----'
                })
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    // use: 'css-loadermodules&localIdentName=[local]=[hash:base64:8]!resolve-url-loader!pos-----'
                })
            },
            {
                test: /\.(png|gif|jpg|jpeg|bmp)$/,
                loader: 'url-loader?limit=1&name=images/[name].[hash:8]/[ext]'
            }, // 限制大小5kb
            {
                test: /\.(woff|woff2|svg|ttf|eot)($|\?)/,
                loader: 'file-loader?name=fonts/[name].[hash:8]/[ext]'
            } // 限制大小小于5kb
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.html'
        }),

        new DemokkkkkkkkCommonsChunkPlugin({
            name: 'vendor',
            filename: 'script/[name].[hash:8].js',
            test: {
                aaa: {
                    aaatest: () => console.log("我在78行")
                }
            }
        }),

        new ExtractTextPlugin('style/[name].[chunkhash:8].css'),

        new webpack.HotModuleReplacementPlugin(),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'script/[name].[hash:8].js'
        }),
    ],

    devServer: {
        // 代理的配置，可以让所有 /api 相关的请求 转到 3000 端口
        // 尽管我们的应用和服务器在不同的域，还是可以访问的，不存在跨域的问题
        proxy: {
            '/api': {
                target: "http://localhost:3000",
                secure: false
            },
            '/images': {
                target: "http://localhost:3000",
                secure: false
            }
        },

        contentBase: './public',
        historyApiFallback: true,
        inline: true,
        hot: true
    }
}
