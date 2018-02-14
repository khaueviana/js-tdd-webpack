const webpackg = require('webpack')

module.exports = {
    devtool: 'source-map',
    entry: {
        filename: './app.js'
    },
    output: {
        filename: './build.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        ['es2015', { modules: false }]
                    ]
                }
            }
        ]
    },
    plugins: [
        new webpackg.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            output: { comments: false },
            sourceMap: true
        })
    ]
}