const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry:"./index.js",

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "./index_bundle.js"
    },
    module: {
        rules: [
            {test: /\.(css)$/, use: ["style-loader", 'css-loader']},
            {test: /\.(js)$/, use: ['babel-loader']},
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: "./index.html"})
    ],
}
