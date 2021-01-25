const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

module.exports = function image(cb) {
    gulp.src('src/images/**')
        .pipe(imagemin())
        .pipe(gulp.dest('build/img'))

    return cb();
}