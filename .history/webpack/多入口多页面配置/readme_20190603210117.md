### 多页面问题
    借助html-weppack-plugin,多次实例化一个html-webpack-plugin 的实例即可，

        const HtmlWebpackPlugin = require('html-webpack-plugin');

        const index = new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html'
        })

        const list = new HtmlWebpackPlugin({
            template:'./src/index.html'
            filename:'list.html'
        });

        module.exports = {
            mode: 'development',
            entry: {
                main:'./src/index.js'
            },
            plugin:[indexPage,listPage]
        }

如果template 页面结构不同，加载对应的template即可。


### 多入口问题
上述打包出来的文件 引入的是同一个js,如果入口需要区分。则要利用 html-webapck-plugin 的连个参数
chunks和excludeChunks.chunks是当前页面包含的chunks,可以直接用entry的key。excludeChunks则是要排除的chunks.

        const HtmlWebPackPlugin = require('html-webpack-plugin');

        module.exports = {
            mode: 'development',
            entry: {
                index: './src/index.js',
                list: './src/list.js'
            },
            plugins: [
                new HtmlWebPackPlugin({template: './src/index.html', filename: 'index.html', chunks: ['index']}),
                new HtmlWebPackPlugin({template: './src/list.html', filename: 'list.html', chunks: ['list']})
            ]
        };

