const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = function(env, argv) {
	const dev = (argv.mode === 'development')
	const cssLoaders = [
		MiniCssExtractPlugin.loader,
		{
			loader: 'css-loader',
			options: {
				importLoaders: 1,
				camelCase: true,
				minimize: true,
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
			filename: '[name].min.css'
		},
		watch: dev,
		resolve: {
			extensions: ['.sass', '.scss']
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
			})
		]
	}
}
