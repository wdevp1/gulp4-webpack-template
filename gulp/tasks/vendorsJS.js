const gulp = require('gulp');

const vendorsScripts = [
  './node_modules/svg4everybody/dist/svg4everybody.min.js'
];

module.exports = function vendors(cb) {
  return vendorsScripts.length
    ? gulp.src(vendorsScripts)
      .pipe(gulp.dest('./dist/js'))
    : cb();
};
