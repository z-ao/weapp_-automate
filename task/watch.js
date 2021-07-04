const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');
const config = require('../gulp.config.js');

const DEV_PATH = config.style_option.TARGET_PATH.concat(config.eslint_option.TARGET_PATH);

gulp.task('watch', function() {
  gulp.watch(DEV_PATH, function () {
    gulpSequence('eslint', 'style')(function (err) {
      if (err) console.log(err)
    })
  });
});
