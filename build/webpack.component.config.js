const base = require('./webpack.config');
const { merge } = require('webpack-merge');
const path = require('path');

const resolve = (componentName) => path.resolve(process.cwd(), `./components/${componentName}/index.ts`);

module.exports = merge(base, {
    entry: {
        button: resolve('button'),
    },
})