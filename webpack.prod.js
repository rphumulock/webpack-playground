const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const htmlwebpackplugin = require('html-webpack-plugin');
const webpack = require('webpack');
const uglifyjsplugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = merge(common, {
    devtool: 'sourcemap',
    plugins: [
        new uglifyjsplugin({
            sourceMap: true
        }),
        new htmlwebpackplugin({
            title: 'Production'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
});