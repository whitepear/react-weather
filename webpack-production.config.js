var devConfig = require('./webpack.config.js');
var webpack = require('webpack');

var productionPlugin = new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: JSON.stringify("production")
    },
});

devConfig.plugins.push(productionPlugin);

module.exports = devConfig;