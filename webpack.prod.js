const path = require('path')
const common = require('./webpack.common')
const merge = require('webpack-merge').merge
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = merge(common,{
    mode:'production',
    output:{
        filename:'main.[contenthash].js',
        path: path.join(__dirname,'prod')
    },
    plugins:[new CleanWebpackPlugin()]
})