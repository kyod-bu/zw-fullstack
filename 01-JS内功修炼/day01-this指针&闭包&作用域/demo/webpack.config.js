// 配置一个webpack
module.exports = {

    mode: 'development',
    // devtool: 'none',
    entry: {
        index: './src/index.js'
    },

    output: {
        path: __dirname + '/dist',
        filename: 'index.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};
