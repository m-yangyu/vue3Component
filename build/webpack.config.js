const path = require('path');
const MiniCssExtrackPlugin = require('mini-css-extract-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const { alias } = require('./config');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    output: {
        filename: '[name].js',
        path: path.resolve(process.cwd(), './lib'),
        publicPath: '/dist/',
        chunkFilename: '[id].js',
        libraryExport: 'default',
        library: 'ddmcUI',
        libraryTarget: 'commonjs2'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json', '.ts', '.tsx', '.jsx'],
        alias,
        modules: ['node_modules'],
        plugins: [
            new TsconfigPathsPlugin({
                configFile: path.resolve(process.cwd(), 'tsconfig.json')
            })
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vue: {
                    test: '/vue/',
                    
                }
            }
        },
        minimize: false,
    },
    externals: {
        vue: 'vue',
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.(js|ts|tsx|jsx|vue)$/,
                enforce: 'pre',
                loader: 'eslint-loader',
                options: {
                    formatter: require('eslint-friendly-formatter'),
                    fix: true,
                }
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(ts|tsx)$/,
                use: [
                    { loader: 'cache-loader' },
                    { loader: 'babel-loader' },
                    {
                        loader: 'ts-loader',
                        options: {
                            appendTsSuffixTo: [/\.vue$/],
                            context: process.cwd(),
                            configFile: 'tsconfig.json',
                        }
                    }
                ]
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