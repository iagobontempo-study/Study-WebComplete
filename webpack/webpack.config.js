const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/pulic'
    },
    module: {
        rules: [{
            test: /\.css$/,  
            use: [
                'style-loader', // Adiciona a CSS dentro da DOM na tag <style>
                'css-loader', //interpreta @import, url()... (dependencias precisam estar instaladas)
            ]
        }]
    }
}