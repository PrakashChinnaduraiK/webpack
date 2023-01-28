const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path")
//var ExtractTextPlugin = require('extract-text-webpack-plugin');

//var extractPlugin = new ExtractTextPlugin({
  // path : path.resolve(__dirname, "dist"),
  // filename: 'main.css'
//});
module.exports = {
    entry : "./src/js/app.js",
    module :{
        rules : [
            {
                test : /\.svg$/,
                use : "svg-inline-loader",
            },
            {
                test : /\.css$/,
                use : ["style-loader","css-loader"]
                      
            },
            {
                test : /\.(js)$/,
                use : "babel-loader",
            },
            {
                test : /\.html$/,
                use : "html-loader",
            },
            {
                test: /\.(jpg|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/',
                            publicPath: 'img/'
                        }
                    }
                ]
            }
        ]
    },
    output : {
        path : path.resolve(__dirname, "dist"),
        filename : "bundle.js"
    },
    plugins: [
       // extractPlugin,
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],
    mode : process.env.NODE_ENV === "production" ? "production" : "development"
};