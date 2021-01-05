const gulp = require('gulp');
const imageMinify = require('./imageMinify');
const svgSprite = require('./spriteSVG');
const pngSprite = require('./spritePNG');
const styles = require('./styles');
const pug2html = require('./pug');
const script = require('./scripts');
const grid = require('./grid');

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
  gulp.watch(['./src/pug/**/*.pug', './src/pug/data/**/*.json'], gulp.series(pug2html));
  gulp.watch('./dist/*.html').on('change', $.bs.reload);
  gulp.watch('./smartgrid.js', gulp.series(grid));
}
