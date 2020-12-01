const { merge } = require('webpack-merge');
const base = require('./webpack.config');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

const root = process.cwd();
const srcDir = `${root}/src`;
const componentDir = `${root}/components`;

module.exports = merge(base, {
    entry: {
        index: path.resolve(__dirname, '../src/index.ts'),
    }
})