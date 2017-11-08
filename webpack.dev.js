const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const htmlwebpackplugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './build',
        hot: true
    },
    plugins: [
        new htmlwebpackplugin({
            title: 'Development'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});