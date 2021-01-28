const gulp = require('gulp');

module.exports = function forwardFonts(cb) {
    gulp.src(`src/fonts/**`)
        .pipe(gulp.dest(`build/fonts`));
    
    return cb();
}