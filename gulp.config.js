const GULP_CONFIG = {
	// 开发目录
	target_path: './',

	eslint_option: {
		init: false,
		TARGET_PATH: ['**/*.js', 'app.js', '!node_modules/**/*.js'],
		IGNORE_PATH: [],
		configFile: './.eslintrc.js'
	},

	style_option: {
		init: true,
		TARGET_PATH: ['app.less', '**/*.less', '!node_modules/**/*.less'],
		IGNORE_PATH: []
	},
}

module.exports = GULP_CONFIG;