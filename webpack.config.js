const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const base =require('./webpack.config.base')

module.exports = {
    ...base,
    devtool: "inline-source-map",

    module: {
        rules: [
            {
                test: /\.css$/i,
                // use: [MiniCssExtractPlugin.loader, "css-loader"],
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};
