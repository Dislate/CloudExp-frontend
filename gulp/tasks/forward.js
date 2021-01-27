const gulp = require('gulp');

module.exports = function forward(type, srcDirName = '', destDirName = '') {
    return function(cb) {
        gulp.src(`src/${srcDirName}*${type}`)
            .pipe(gulp.dest(`build/${destDirName}`));
    
        return cb();
    };
}