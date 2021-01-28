const gulp = require('gulp');
const pug = require('gulp-pug');

module.exports = function pug2html(cb) {
    gulp.src('src/pages/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('build'))

    cb();
}