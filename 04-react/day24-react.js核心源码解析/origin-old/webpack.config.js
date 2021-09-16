module.exports = {
    mode: 'development',
    entry: __dirname + '/src/index.jsx',
    output: {
        path: __dirname + '/dist/static',
        filename: 'index.js'
    },
    devtool: 'none',
    optimization: {
        minimize: false
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-modules-typescript-loader', 'css-loader']
            },
            {
                test: /.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader'
                    }
                ]
            }
        ]
    }
};
