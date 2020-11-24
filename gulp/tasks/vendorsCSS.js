const gulp = require('gulp');

const vendorsCss = [

];

module.exports = function vendors(cb) {
  return vendorsCss.length
    ? gulp.src(vendorsCss)
      .pipe(gulp.dest('./dist/css'))
    : cb();
};
