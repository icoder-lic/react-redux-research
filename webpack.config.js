const path = require("path");
module.exports = {
    entry : "./www/app/main",
    output : {
        path : path.resolve(__dirname,"./www/dist"),
        filename : "bundle.js"
    },
    watch : true,
    module :{
        rules :[
            {
                test : /\.jsx?$/,
                include : [
                    path.resolve(__dirname,"./www/app")
                ],
                exclude : [
                    path.resolve(__dirname,"node_modules")
                ],
                loader :"babel-loader",
                options : {
                    presets :["env","react"],
                    plugins :["transform-object-rest-spread","transform-runtime"]
                }
            }
        ]
    }
}