const gulp = require('gulp');
const gulpIf = require('gulp-if');
const { argv } = require('yargs');

const vendorsScripts = [
  './node_modules/svg4everybody/dist/svg4everybody.min.js'
];

module.exports = function vendors(cb) {
  return vendorsScripts.length
    ? gulp.src(vendorsScripts)
      .pipe(gulpIf(!argv.webpack, gulp.dest('./dist/js')))
    : cb();
};
