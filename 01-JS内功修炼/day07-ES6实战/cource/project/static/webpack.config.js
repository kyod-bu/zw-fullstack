module.exports = {
    mode: 'production',
    entry: __dirname + '/src/index.js',
    output: {
        path: __dirname + '/dist/',
        filename: 'index.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: [
                        ["@bable/plugin-proposal-decorators", { "legacy": true }],
                        ["@babel/plugin-proposal-class-properties", { "loose": true }],
                        ["@babel/plugin-transform-regenerator"]
                    ]
                }
            }
        }]
    }
};

