const webpack = require('webpack');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const uglifyjsPlugin=require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports={
    entry:{
        'main': ['./scripts/package/index.js']
    },
    context: path.join(process.cwd(), 'app'),
    output: {
        path: path.join(__dirname, './lib'),
        filename: 'index.js',
        library: 'fadada-ui',
        libraryTarget: 'umd'
    },
    resolve:{
        modules: [
            'node_modules',
            path.resolve(process.cwd(), 'app')
        ],
        alias: {
            'vue':path.resolve(process.cwd(), './node_modules/vue/dist/vue.min.js'),
            'vue-router':path.resolve(process.cwd(), './node_modules/vue-router/dist/vue-router.min.js'),
            'vuex':path.resolve(process.cwd(), './node_modules/vuex/dist/vuex.min.js'),
            'md5':path.resolve(process.cwd(), './node_modules/md5/md5.js')
        },
        extensions: ['.vue','.js','.css']
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico|swf)$/,
                use: 'url-loader?limit=10000&name=images/[name].[ext]?[hash]'
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader:'css-loader',
                            options:{
                                minimize: true //css压缩
                            }
                        },'less-loader'],
                    allChunks: true
                })
            },
            {
                test: /\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                    {
                        loader: 'css-loader',
                        options:{
                            minimize: true //css压缩
                        }
                    }
                    ]
                })
            },
        ]
    },
    performance: {
        hints: false
    },
    //压缩js
    optimization: {
        minimizer: [
            new uglifyjsPlugin({
                uglifyOptions: {
                    compress: false
                }
            })
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
        new webpack.ProgressPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('main.css'),
    ]
}