'use strict'

const WebpackConfigGenerator = require('webpack-config-generator')

module.exports = (env, argv) => {
	return WebpackConfigGenerator({
		mode: argv.mode,
		entry: {
			app: ['./src/docs/ts/App.ts', './src/docs/sass/style.sass']
		},
		index: 'src/docs/index.html',
		resourcesFolder: 'docs/',
		favicon: './src/docs/favicon.png'
	})
}
