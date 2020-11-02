const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config');

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        libraryExport: 'default',
        library: 'ddmcUI',
        libraryTarget: 'commonjs2'
    },
})