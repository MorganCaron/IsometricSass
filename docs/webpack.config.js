const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssnanoPlugin = require('@intervolga/optimize-cssnano-plugin')

module.exports = function(env, argv) {
	const dev = (argv.mode === 'development')
	const cssLoaders = [
		MiniCssExtractPlugin.loader,
		{
			loader: 'css-loader',
			options: {
				importLoaders: 2,
				sourceMap: true
			}
		},
		{
			loader: 'postcss-loader',
			options: {
				plugins: (loader) => [
					require('autoprefixer')({
						browsers: ['last 2 versions']
					})
				],
				sourceMap: true
			}
		}
	]
	const sassLoader = {
		loader: 'sass-loader',
		options: {
			sourceMap: true
		}
	}
	const fileLoader = {
		loader: 'file-loader'
	}
	return {
		mode: argv.mode,
		entry: {
			style: './src/css/style.sass'
		},
		output: {
			filename: '[name].min.js'
		},
		watch: dev,
		resolve: {
			extensions: ['.js', '.json', '.css', '.sass', '.scss', '.png', '.svg', '.jpg', '.gif']
		},
		module: {
			rules: [
				{
					test: /\.css$/,
					use: cssLoaders,
					exclude: /(node_modules|bower_components)/
				},
				{
					test: /\.s(a|c)ss$/,
					use: [...cssLoaders, sassLoader],
					exclude: /(node_modules|bower_components)/
				},
				{
					test: /\.(png|svg|jpg|gif)$/,
					use: fileLoader,
					exclude: /(node_modules|bower_components)/
				}
			]
		},
		plugins: [
			new CleanWebpackPlugin(['dist/*']),
			new MiniCssExtractPlugin({
				filename: "[name].min.css",
				chunkFilename: "[id].min.css"
			}),
			new OptimizeCssnanoPlugin({
				cssnanoOptions: {
					preset: ['default', {
						discardComments: {
							removeAll: true,
						},
					}],
				},
			})
		]
	}
}
