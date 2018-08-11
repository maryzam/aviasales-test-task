const path = require('path');
const webpack = require('webpack');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const commonPlugins = [
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
          template: path.join('public', 'index.html'),
          alwaysWriteToDisk: true,
          inject: 'body'
    })
];

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.json']
    },
    module: {
         rules: [
             {
                 test: /\.jsx?$/,                 
                 exclude: /(node_modules)/,
                 use: 'babel-loader'
             },
             {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use:  {
                        loader: 'css-loader',
                        options: {
                            minimize: true,
                            sourceMap: true
                        }
                    }
                })
             }
         ]
     },
     devtool: 'source-map',
     plugins: (isProduction) ? [
        ...commonPlugins,
        new UglifyJSPlugin({
            uglifyOptions: {
                    ecma: 8,
                    compress: true,
                    extractComments: true,
                }
            })
        ] : commonPlugins
 };