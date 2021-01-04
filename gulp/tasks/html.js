const gulp = require('gulp');
const htmlValidator = require('gulp-w3c-html-validator');
const plumber = require('gulp-plumber');
const { argv } = require('yargs');
const gulpIf = require('gulp-if');
const gih = require("gulp-include-html");

module.exports = function html(done) {
  gulp.src('./src/html/*.html')
    .pipe(plumber())
    .pipe(gih())
    .pipe(plumber.stop())
    .pipe(gulpIf(argv.prod, htmlValidator()))
    .pipe(gulp.dest('./dist'));
  done();
};
