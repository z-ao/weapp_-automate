const GULP_CONFIG = {
	// 输出目录
	output_path: 'dist',
	// 开发目录
	target_path: 'src',

	build_option: {
		init: true,
		TARGET_PATH: ['src/**'],
		IGNORE_PATH: ['src/app.less', 'src/**/*.less', 'src/app.js', 'src/**/*.js', 'src/app.ts', 'src/**/*.ts']
	},

	eslint_option: {
		init: true,
		TARGET_PATH: ['src/**/*.js', 'src/app.js'],
		IGNORE_PATH: [],
		configFile: './.eslintrc.js'
	},

	script_option: {
		init: true,
		TARGET_PATH: ['src/**/*.js', 'src/app.js'],
		IGNORE_PATH: []
	},

	style_option: {
		init: true,
		TARGET_PATH: ['src/app.less', 'src/**/*.less'],
		IGNORE_PATH: []
	},

	typescript_option: {
		init: false,
		TARGET_PATH: ['src/**/*.ts', 'src/app.ts', 'node_modules/miniprogram-api-typings/index.d.ts', 'node_modules/typescript/lib/lib.esnext.full.d.ts']
	}
}

module.exports = GULP_CONFIG;