const path = require('path');
const nodeExternals = require('webpack-node-externals');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const json = require('./package');

const filename = 'server.js';

module.exports = {
    context: path.resolve(__dirname, 'src'),
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true // set to true if you want JS source maps
            })
        ]
    },
    resolve: {
        extensions: ['.json', '.js', '.jsx', '.css', '.scss']
    },
    target: 'node', // in order to ignore built-in modules like path, fs, etc.
    node: {
        __dirname: false,
        __filename: true,
    },
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    devtool: 'source-map',
    entry: './server.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[name].js',
        filename
    },
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader', 'eslint-loader'],
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }
        ]
    },
    plugins: [
        new GenerateJsonPlugin('package.json', Object.assign({}, json, {
            main: filename,
            scripts: {
                start: `node ${filename}`
            },
            devDependencies: {}
        }))
    ]
};
