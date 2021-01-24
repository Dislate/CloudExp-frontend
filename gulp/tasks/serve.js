const gulp = require('gulp');
const server = require('browser-sync').create();

const style = require('./style');
const script = require('./script');
const image = require('./image');
const forward = require('./forward')('html');

module.exports = function serve(cb) {
    server.init({
        server: 'build',
        notify: false,
        open: true,
    });

    gulp.watch('src/styles/**', gulp.series(style)).on('change', server.reload);
    gulp.watch('src/scripts/**', gulp.series(script)).on('change', server.reload);
    gulp.watch('src/images/**', gulp.series(image)).on('change', server.reload);
    gulp.watch('src/*.html', gulp.series(forward)).on('change', server.reload);

    return cb();
}