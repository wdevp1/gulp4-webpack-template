const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const eslint = require('gulp-eslint');
const rename = require('gulp-rename');
const { argv } = require('yargs');
const gulpIf = require('gulp-if');

module.exports = function scripts(done) {
  gulp.src('./src/static/js/scripts.js')
    .pipe(gulpIf(!argv.prod, sourcemaps.init()))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulpIf(argv.prod, uglify()))
    .pipe(gulpIf(!argv.prod, sourcemaps.write()))
    .pipe(gulpIf(!argv.webpack, gulp.dest('./dist/js')));
  done();
};
