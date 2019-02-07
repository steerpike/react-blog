const { resolve } = require('path')
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const srcDir = resolve(__dirname, 'src')

module.exports = {
	entry: `${srcDir}/index.js`,
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[chunkhash].js',
		publicPath: '/'
	},
	devServer: {
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.css$/,
				use: [
					{
						loader:MiniCssExtractPlugin.loader,
					},
					{
						loader:"css-loader",
						options: {
							modules: true,
							importLoaders: 1,
							localIdentName: "[name]_[local]_[hash:base64]",
							sourceMap: true,
							camelCase: true
						}
					}
				]
			},
		]
		
	},
	plugins: [
		new CleanWebpackPlugin('dist', {} ),
		new HtmlWebpackPlugin({
			template:`${srcDir}/index.html`,
			filename: 'index.html'
		}),
		new DashboardPlugin(),
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: "style.[contenthash].css"
		})
	]
}