const gulp = require('gulp');
const plumber = require('gulp-plumber');
const scss = require('gulp-sass');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
const { argv } = require('yargs');
const gulpIf = require('gulp-if');

module.exports = function styles(done) {
  gulp.src('./src/static/scss/styles.scss')
    .pipe(plumber())
    .pipe(gulpIf(!argv.prod, sourcemaps.init()))
    .pipe(scss())
    .pipe(rename({suffix: '.min'}))
    .pipe(autoprefixer())
    .pipe(gulpIf(argv.prod, gcmq()))
    .pipe(gulpIf(argv.prod, cleanCSS({
      debug: true,
      compatibility: '*',
      level: 2
    }, details => {
      console.log(`${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`)
    })))
    .pipe(gulpIf(!argv.prod, sourcemaps.write()))
    .pipe(gulp.dest('./dist/css'))
    .pipe(gulpIf(!argv.prod, $.bs.stream()));
  done();
};
