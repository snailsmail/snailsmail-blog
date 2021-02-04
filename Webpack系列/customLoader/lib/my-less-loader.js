const less = require('less')

module.exports = function(source) {
    less.render(source, (error, output) => {
        this.callback(error, output.css)
    })
    return // 当调用 callback() 时总是返回 undefined
}