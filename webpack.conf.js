const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'production',
    entry: {
        app: path.join(__dirname, './src/index.js')
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].[hash].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader'

        }]
    },
    plugins: [
        new HTMLPlugin({
            template: path.join(__dirname, './src/index.html')
        })
    ]
}