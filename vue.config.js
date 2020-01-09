'use strict'

const webpack = require("webpack")

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/totem/' : '/',
    assetsDir: "static",
    filenameHashing: true,
    devServer: {
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        proxy: {
            '/': {
                target: 'http://127.0.0.1:8080',
                changeOrigin: true,
                pathRewrite: {'^/': ''}
            }
        }
    },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $:"jquery",
                jQuery:"jquery"
            })
        ]
    }
}
