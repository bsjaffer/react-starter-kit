var path = require('path');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

var config = {
    entry: path.resolve('./Scripts/main.js'),
    output: {
        path: path.resolve(__dirname, './dist/build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-0'],
                plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
            }
        },
            {
                test: /\.scss$/i,
                loaders: ['style', 'css', 'sass']
            }
        ]
    }
};

module.exports = config;