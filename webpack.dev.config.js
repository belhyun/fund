const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    devServer: {
        // 어떤 요청이 들어와도 index.html이 보여지도록
        historyApiFallback: true,
        // compress: true,
        publicPath: '/',
        contentBase: [
            // path.resolve(__dirname, 'interfaces'),
            path.resolve(__dirname, 'interfaces', 'bundle'),
            path.resolve(__dirname, 'node_modules')
        ],
        host: "local.yonsei.ac.kr",
        hot: true,
        inline: true,
        port: 4000
        // proxy: {
        //     "**": "http://localhost:8060"
        // }
    },
    entry: './interfaces/index.js',
    output: {
        path: path.resolve(__dirname, 'interfaces', 'bundle'),
        filename: 'bundle.js'
    },
    module: {
        rules:[
            {
                test: /\.(css|less)$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader?name=/bundle/[name].[ext]',
                        options: {}
                    }
                ]
            },
            {
                test: /\.js$/ ,
                exclude: '/node_modules/',
                use: [
                    {
                        loader: 'babel-loader'
                    },
                ],
            },
            {
                test: /\.jsx$/ ,
                exclude: '/node_modules/',
                use: [
                    {
                        loader: 'babel-loader'
                    },
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]?[hash]',
                            publicPath: './bundle/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(), //prints more readable module names in the browser console on HMR updates
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         NODE_ENV: JSON.stringify('development')
        //     }
        // }),
        new webpack.HotModuleReplacementPlugin()//,
        //new UglifyJsPlugin()
        //,
        // new HtmlWebpackPlugin({
        //     template: "./interfaces/index.html",
        //     filename: "./interfaces/bundle/index.html",
        //     inject: false
        // })
    ],
    cache: true
    // output: {
    //     pathinfo: false
    // }
}