const gulp = require('gulp');

// Копируем все шрифты из папки src в dist

module.exports = function fonts(done) {
  gulp.src('./src/static/fonts/**/*.*')
    .pipe(gulp.dest('./dist/fonts'));
  done();
};
