const gulp = require('gulp');
const named = require('vinyl-named');
const webpack = require('webpack-stream');
const babel = require('gulp-babel');

const config = require('../gulp.config');
const DEV_PATH = config.target_path
const OPTION = config.script_option
const TARGET_PATH = OPTION.TARGET_PATH.concat(OPTION.IGNORE_PATH.map(i => '!' + i))
const OUTPUT_PATH = config.output_path

gulp.task('script', function() {
    if (!OPTION.init) return;

    gulp
        .src(TARGET_PATH, { base: DEV_PATH })
        //生成的文件名能够和原文件对上
        .pipe(named(function(file) {
            var extnameIndex = file.relative.indexOf('.js');
            return file.relative.slice(0, extnameIndex); // 剔除.js 因为打包后自动会在文件名末尾加js
        }))
        .pipe(webpack({
            mode: 'production',
            module: {
                rules: [
                    { 
                        test: /\.js$/, 
                        loader: 'babel-loader',
                        exclude: /(node_modules|bower_components)/
                    }
                ]
            }
        }))
        .pipe(gulp.dest(OUTPUT_PATH))
})
