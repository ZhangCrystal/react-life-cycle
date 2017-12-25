const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry:'./src/index.js',
    output:{
        path:"/dist",
        filename:"bundle.js"
    },
    module:{
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-1']
            }
        },{test: /\.css$/,
            loader: 'style-loader!css-loader'}
            ]

    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./index.html"
        }),
        new ExtractTextPlugin("style.css"),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: './',
    }
}