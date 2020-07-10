const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackMd5Hash = require('webpack-md5-hash');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[chunkhash].js'
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				use: { loader: 'babel-loader' },
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
			},
			{
				test: /\.(woff|woff2|ttf)$/,
				use: 'file-loader?name=./fonts/[name].[ext]'
			},
			{
				test: /\.(jpg|jpeg|png|svg|webp)$/,
				use: 'file-loader?name=./images/[name].[ext]&esModule=false'
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css'
		}),
		new WebpackMd5Hash()
	]
}
