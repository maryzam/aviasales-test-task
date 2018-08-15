const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const commonConfig = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.json']
    },
    devtool: 'source-map',
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
     plugins: [
                new ExtractTextPlugin('styles.css'),
                new HtmlWebpackPlugin({
                      template: path.join('public', 'index.html'),
                      alwaysWriteToDisk: true,
                      inject: 'body'
                }),
                new CopyWebpackPlugin([{
                        from: 'public/assets/',
                        to: 'assets',
                        cache: true
                    }, {
                        from: 'public/data/',
                        to: 'api',
                        cache: true
                    }], {})
            ]
 };

const devConfig = {
    mode: 'development',
    devServer: {
        port: 9000,
        compress: true,
        contentBase: path.join(__dirname, 'dist')
    }
};

const prodConfig = {
    mode: 'production',
    plugins: [
            new UglifyJSPlugin({
                uglifyOptions: {
                        ecma: 8,
                        compress: true,
                        extractComments: true,
                    }
                })
    ]
};

module.exports = (process.env.NODE_ENV === 'production') ?
                        merge(commonConfig, prodConfig) : 
                        merge(commonConfig, devConfig);
