let webpackMerge = require('webpack-merge');
let path = require('path');
let fs=require('fs');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let commonConfig=require('./webpack.common');
module.exports=webpackMerge(commonConfig,{
    output:{
        path: path.join(process.cwd(), 'dist'),
        publicPath: 'http://127.0.0.1:8085/',    
        filename: '[name].bundle[hash:7].js',
        chunkFilename: '[id].chunk[hash:7].js',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    devServer:{
        contentBase:path.join(process.cwd(), 'dist'),
        host:'127.0.0.1',
        stats: 'minimal',
        hot:true,
        compress:true,
        historyApiFallback:true,
        proxy:[
            {
                context:['/'],
                target:'http://172.17.177.60:8084/',
                changeOrigin:true,
                secure:false
            }
        ],
    }
})
//http://ci.fabigbig.com:8090/
//http://192.168.189.9:8080/
//http://172.17.177.60:8084/

