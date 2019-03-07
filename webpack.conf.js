const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: {
        app: path.join(__dirname, './src/index.js'),
    },
    resolve: {
        extensions: ['.jsx', '.js']
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].[hash].js',
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
    ],
    devServer: {
        host: '0.0.0.0',
        port: '8888',
        contentBase: path.join(__dirname, './dist'),
        hot: true,
        overlay: {
            errors: true // 错误信息 黑框
        },
        historyApiFallback: {
            index: 'index.html'
        }
    }
}