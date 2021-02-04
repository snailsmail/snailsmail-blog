const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: './src/mian.js',
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    mode: "development",
    resolveLoader: {
        modules: ['node_modules', path.resolve(__dirname, 'lib')]
    },
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     use: path.resolve(__dirname, 'src/my-first-loader.js')
            //     // use: {
            //     //     loader: './src/my-first-loader.js'
            //     // }
            // },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", 'less-loader']
                // use: ["my-style-loader", "my-css-loader", "my-less-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body', // 将生成的文件引入位置 body/head 可查阅其它配置https://github.com/jantimon/html-webpack-plugin#options
            title: '自定义loader',
            template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ]
}