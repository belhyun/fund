const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        compress: true,
        publicPath: '/src/main/resources/static/',
        host: "0.0.0.0",
        hot: true,
        inline: true,
        port: 3001
        // proxy: {
        //     "**": "http://localhost:8060"
        // }
    },
    entry: './src/main/resources/static/index.js',
    output: {
        path: path.resolve(__dirname, 'src', 'main', 'resources', 'static', 'bundle'),
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
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'react'],
                        },
                    },
                ],
            },
            {
                test: /\.jsx$/ ,
                exclude: '/node_modules/',
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'react'],
                        },
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
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),
        new webpack.HotModuleReplacementPlugin()
        //,
        //  new HtmlWebpackPlugin({
        //      filename: __dirname + "/src/main/resources/static/index.html",
        //      inject: "body"
        // })
    ],
    cache: true//,
    // optimization: {
    //     removeAvailableModules: false,
    //     removeEmptyChunks: false,
    //     splitChunks: false
    // },
    // output: {
    //     pathinfo: false
    // }
}