const modoDev=process.env.NODE_ENV!=='prodution'
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const webpack=require('webpack')

module.exports={
    mode: modoDev?'development':'production',
    entry:'./src/principal.js',
    output:{
        filename:'principal.js',
        path:__dirname+'/public'
    },
    devServer:{
        contentBase:"./public",
        port:9012
    },
    optimization:{
        minimizer:[
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    ecma: 6,
                },
            }),           
            new OptimizeCssAssetsPlugin({})
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:"estilo.css"
        })
    ],
    module:{
        rules:[{
            test:/\.s?[ac]ss$/,
            use:[
                MiniCssExtractPlugin.loader,
                // 'style-loader',//adiciona a css na DOM
                'css-loader',//interpreta o import de imagens, url()...
                'sass-loader',
            ],
            test:/\.(png|svg|jpg|gif|jpeg)$/,
            use:['file-loader']
        }]
    }
}