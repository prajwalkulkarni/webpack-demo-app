const path = require('path')
const common = require('./webpack.common')
const merge = require('webpack-merge').merge


module.exports = merge(common,{
    mode:'development',
    output:{
        filename:'main.js',
        path: path.join(__dirname,'dist')
    }
})