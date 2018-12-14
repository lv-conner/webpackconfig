const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    mode:"production",
    entry:{
        index:path.resolve("src/index.js"),
        home:path.resolve("src/home.js")
    },
    output:{
        path:__dirname + "/build",
        filename:"[name]-[hash:8].js"
    },
    devServer:{
        /*设置基本目录结构，也就是你想要使用服务的目录地址*/
        contentBase:path.resolve(__dirname,'build'),
        /*服务器的IP地址，可以使用IP也可以使用localhost*/
        host:'localhost',
        /*服务端压缩是否开启，目前开不开都行，想关你就关*/
        compress:true,
        /*配置服务端口号，建议别用80，很容易被占用，你要是非要用也是可以的。*/
        port:3000
    },
    module:{
        rules:[
            
            {
                // test 表示测试什么文件类型
                test:/\.css$/,
                // 使用 'style-loader','css-loader'
                use:['style-loader','css-loader']
            },
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader"
                }
            }
        ]
    },
    plugins:[
        //new CleanWebpackPlugin(["build"],{verbose:true}),
        new HtmlWebpackPlugin({
            inject:true,
            filename:"index.html",
            chunks:["index"],
            template:path.resolve("templates/index.html"),
            minify:{
                minifyJS:true
            }
        }),
        new HtmlWebpackPlugin({
            inject:true,
            filename:"home.html",
            chunks:["home"],
            template:path.resolve("templates/home.html"),
            minify:{
                minifyJS:true
            }
        })
    ]
}