const gulp = require('gulp');
const imageMinify = require('./imageMinify');
const svgSprite = require('./spriteSVG');
const pngSprite = require('./spritePNG');
const styles = require('./styles');
const html = require('./html');
const script = require('./scripts');

// Запуск сервера а также слежка за файлами

module.exports = function serve() {
  $.bs.init({
    server: {
      baseDir: "./dist"
    }
  });

  gulp.watch('./src/static/images/**/*.{gif,png,jpg,svg,webp}', gulp.series(imageMinify));
  gulp.watch('./src/static/images/sprite/svg/*.svg', gulp.series(svgSprite));
  gulp.watch('./src/static/images/sprite/png/*.png', gulp.series(pngSprite));
  gulp.watch('./src/static/scss/**/*.scss', gulp.series(styles));
  gulp.watch('./src/static/js/**/*.js', gulp.series(script));
  gulp.watch('./src/html/**/*.html', gulp.series(html));
  gulp.watch('./dist/*.html').on('change', $.bs.reload);
}
