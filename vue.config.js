const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    publicPath: './',
    lintOnSave: true,
    chainWebpack: (config)=>{
        config.resolve.alias
            .set('styles',resolve('src/assets/styles'))
            .set('components',resolve('src/components'))
    }
}