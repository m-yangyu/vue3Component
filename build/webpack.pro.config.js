const { merge } = require('webpack-merge');
const base = require('./webpack.config');
const path = require('path');

module.exports = merge(base, {
    entry: {
        index: path.resolve(__dirname, '../src/index.ts'),
    },
})