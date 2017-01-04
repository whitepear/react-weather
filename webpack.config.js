var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/client/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: [
		'./client/index.js'
	],
	output: {
		path: __dirname + '/server/public',
		filename: 'index_bundle.js'
	},
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
			{test: /\.scss$/, exclude: /node_modules/, loader: "style-loader!css-loader!autoprefixer-loader!sass-loader"},
			{test: /\.jpg|\.png|\.eot|\.otf|\.ttf|\.svg|\.woff/, exclude: /node_modules/, loader: "url-loader?limit=10000"}
		]
	},
	plugins: [HtmlWebpackPluginConfig]	
}