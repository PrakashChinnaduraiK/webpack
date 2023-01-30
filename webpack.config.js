const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path")
module.exports = {
    entry : "./src/js/app.js",
    module :{
        rules : [
            {
                test : /\.css$/,
                use : ["style-loader","css-loader"]
                      
            },
            {
                test : /\.html$/,
                use : "html-loader",
            }
        ]
    },
    output : {
        path : path.resolve(__dirname, "dist"),
        filename : "bundle.js"
    },
    plugins: [
         new HtmlWebpackPlugin({
             template: 'src/index.html'
         })
     ],
    mode : process.env.NODE_ENV === "production" ? "production" : "development"
};