const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "index.[contenthash].js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "XDML - 写代码啦",
            template: "src/assets/index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use:["file-loader"]
            },
            {
                test: /\.styl$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "stylus-loader"
                ]
                // loader: "stylus-loader", // compiles Styl to CSS
            },
            {
                test: /\.less$/i,
                use: [
                    // compiles Less to CSS
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ],
            },
            {
                test: /\.scss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    {
                        loader: "sass-loader",
                        options: {
                            implementation:require('dart-sass')
                        }
                    }
                ],
            },
        ],
    },
};