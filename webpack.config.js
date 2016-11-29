var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: path.join(__dirname,""),
    devtool: debug ? "inline-sourcemap" : null,
    entry: "./Scripts/main.js",
    devtool: 'source-map',
    watch: true,
    devServer: {
        inline: true,
        port: 3333,
        historyApiFallback: true,
        headers: { "Access-Control-Allow-Origin": "*" }
    },
    module: {
        loaders: [
            {
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
            },
            {
                test: /\.css?$/,
                loaders: ['style', 'css?modules&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]'],
                include: __dirname,
            }
        ]
    },
    output: {
        path: './Scripts',
        filename: "bundle.js"
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
};
