const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

console.log('Running Webpack...\n');

// loaders
const rawLoader = require('./conf/webpack/raw-loader');
const babelLoader = require('./conf/webpack/babel-loader');
const cssLoader = require('./conf/webpack/css-loader');
const sassLoader = require('./conf/webpack/sass-loader')(ExtractTextPlugin);

const development = process.env.NODE_ENV === 'development';

const extractSass = new ExtractTextPlugin({
    filename: 'css/[name].[contenthash].css',
    disable: development,
});

var config = {
    context: __dirname + '/src',
    entry: './entry.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.bundle.js'
    },
    externals: {
        'jquery': 'jQuery',
        'angular': 'angular',
    },
    module: {
        rules: [
            babelLoader,
            rawLoader,
            cssLoader,
            sassLoader,
        ],
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            'jquery': 'jquery',
            'window.jQuery': 'jquery',
            'angular': 'angular',
        }),
        new HtmlWebpackPlugin({
            title: 'app',
            disableAdrum: development,
            base: '/',
            minify: {
                collapseWhitespace: true,
            },
            hash: true,
            template: __dirname + '/src/index.ejs',
        }),
        extractSass,
    ],
    stats: {
        colors: true
    },
    devtool: 'source-map',
}

module.exports = config;