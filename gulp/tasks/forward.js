const gulp = require('gulp');

module.exports = function forward(type) {
    return function(cb) {
        gulp.src(`src/*.${type}`)
            .pipe(gulp.dest('build/'));
    
        return cb();
    };
}