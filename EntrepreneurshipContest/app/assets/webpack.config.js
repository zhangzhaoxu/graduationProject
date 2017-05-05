
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const VERSION = require('./package.json').version;
const THEME = require('./package.json').theme;

module.exports = {
    devServer: {
        inline: true,
        color: true,
        contentBase: './build',
        proxy:{
            '/api/*':{
                target:"http://localhost:3000/",
                secure:false
            }
        }
    },
    devTool: 'sourcemap',
    entry:{
        app:"./src/app.js"
    },
    output:{
        path:path.resolve(__dirname, "build", VERSION),
        publicPath:"/build/",
        filename:"[name].bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.scss?$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.css?$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                include: [
                    path.resolve(__dirname, 'css')
                ],
                loader: 'style!css!sass?sourceMap=true&sourceMapContents=true'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader?sourceMap=true&sourceMapContents=true'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.(png|jpg|jpeg|gif)/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            inject: true,
            chunks: ['index']
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};