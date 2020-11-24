const gulp = require('gulp');
const buffer = require('vinyl-buffer');
const imagemin = require('gulp-imagemin');
const { argv } = require('yargs');
const gulpIf = require('gulp-if');

module.exports = function imageMinify(done) {
  gulp.src(
    ['./src/static/images/**/*.{gif,png,jpg,svg,webp}',
      '!./src/static/images/sprite/**/*']
  )
    .pipe(gulpIf(argv.prod, buffer()))
    .pipe(gulpIf(argv.prod, imagemin([
      imagemin.mozjpeg({
        quality: 75,
        progressive: true
      }),
      imagemin.optipng(),
      imagemin.svgo({
        plugins: [
          { removeViewBox: true },
          { cleanupIDs: false }
        ]
      })
    ])))
    .pipe(gulp.dest('./dist/images'));
  done();
};
