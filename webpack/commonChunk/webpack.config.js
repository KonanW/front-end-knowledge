const path = require("path");

//使用commonschunkplugin 插件
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
    entry: {
        index:'./src/index.js',
        index1:"./src/index1.js",
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist')
    },
    plugins :[
        new CommonsChunkPlugin({
            name:"chunk",
            // filename:"chunk.js"
            minChunks:2
        })

        
    ]
  };