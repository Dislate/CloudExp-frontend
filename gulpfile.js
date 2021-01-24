const gulp = require('gulp');
const serve = require('./gulp/tasks/serve');

module.exports.start = gulp.series(serve);