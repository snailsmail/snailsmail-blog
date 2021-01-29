const path = require('path')

module.exports = {
    entry: './src/mian.js',
    output: {
        path: path.resolve(__dirname, './dist')
    },
    mode: "development",
    resolveLoader: {
        modules: ['node_modules', "lib"]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // use: ["style-loader", "css-loader"]
                use: ["my-style-loader", "my-css-loader", "my-less-loader"]
            }
        ]
    }
}