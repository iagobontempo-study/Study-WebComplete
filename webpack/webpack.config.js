const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/pulic'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,  
            use: [
                MiniCssExtractPlugin.loader,
                //'style-loader', // Adiciona a CSS dentro da DOM na tag <style>
                'css-loader', //interpreta @import, url()... (dependencias precisam estar instaladas)
            ]
        }]
    }
}