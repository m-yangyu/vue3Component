const { merge } = require('webpack-merge');
const base = require('./webpack.config');
const CopyPlugin = require('copy-webpack-plugin');

const root = process.cwd();
const srcDir = `${root}/src`;
const componentDir = `${root}/components`;

module.exports = merge(base, {
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: srcDir, to: 'src'},
                { from: componentDir, to: 'components'},
            ]
        })
    ]
})