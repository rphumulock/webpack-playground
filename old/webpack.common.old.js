const path = require('path');
const extracttextplugin = require('extract-text-webpack-plugin');
const cleanwebpackplugin = require('clean-webpack-plugin');
const htmlwebpackplugin = require('html-webpack-plugin');
const webpack = require('webpack');
const uglifyjsplugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        //main: './src/index.js'
        app: './src/index.js',
        print: './src/print.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        //filename: 'bundle.js',
        filename: '[name].bundle.js',
        publicPath: 'build/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: extracttextplugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 40000
                        }
                    },
                    'image-webpack-loader'
                ]
            }
        ]
    },
    plugins: [
        new extracttextplugin('style.css'),
        new cleanwebpackplugin(['build']),
        new htmlwebpackplugin({
            title: 'Output Management'
        })//,
        //new webpack.NamedModulesPlugin(),
        //new webpack.HotModuleReplacementPlugin(),
        //new uglifyjsplugin()
    ],
    devtool: 'inline-source-map',
    /*devServer: {
        contentBase: './build',
        hot: true
    },*/
};