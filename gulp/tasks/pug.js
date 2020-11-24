const gulp = require('gulp');
const htmlValidator = require('gulp-w3c-html-validator');
const plumber = require('gulp-plumber');
const pug = require('gulp-pug');
const { argv } = require('yargs');
const gulpIf = require('gulp-if');
const fs = require('fs');

// Преобразуем Pug в HTML

module.exports = function pug2html(done) {
  gulp.src('./src/pug/pages/*.pug')
    .pipe(plumber())
    .pipe(pug({
      pretty: true,
      locals: {
        data: JSON.parse(fs.readFileSync('./src/pug/data/data.json', 'utf8')),
      }
    }))
    .pipe(plumber.stop())
    .pipe(gulpIf(argv.prod, htmlValidator()))
    .pipe(gulp.dest('./dist'));
  done();
};
