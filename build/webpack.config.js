const path = require('path');
const MiniCssExtrackPlugin = require('mini-css-extract-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const { alias } = require('./config');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: path.resolve(__dirname, '../src/index.ts'),
    output: {
         filename: 'index.js',
        path: path.resolve(process.cwd(), './lib'),
        publicPath: '/dist/'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json', '.ts', '.tsx', '.jsx'],
        alias,
        modules: ['node_modules'],
    },
    optimization: {
        minimize: false,
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                    context: process.cwd(),
                    configFile: 'tsconfig.json',
                }
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    MiniCssExtrackPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('autoprefixer')
                            ]
                        }
                    },
                    'sass-loader',
                ]
            }
        ]
    },
    plugins: [
        new ProgressBarPlugin(),
        new VueLoaderPlugin(),
    ]
}