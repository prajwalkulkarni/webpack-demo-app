const path = require('path')

module.exports = {
    mode:'development',
    entry:'./src/index.js',
    output:{
        filename:'main.js',
        path: path.join(__dirname,'dist')
    },
    module:{
       rules:[
        {
            test:/\.scss$/,
            use:['style-loader','css-loader', 'sass-loader']
        },
       ]
    }
}