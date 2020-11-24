const gulp = require('gulp');
const buffer = require('vinyl-buffer');
const imagemin = require('gulp-imagemin');
const merge = require('merge-stream');
const replace = require('gulp-replace');

const spritesmith = require('gulp.spritesmith');

module.exports = function spritePNG() {
  // Генерируем спрайт
  const spriteData = gulp.src('./src/static/images/sprite/png/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    imgPath: '../images/sprite/sprite.png',
    cssName: '_sprite.scss',
    padding: 5,
    cssVarMap: function (sprite) {
      sprite.name = 'icon-' + sprite.name;
    }
  }));

  // Оптимизируем спрайт
  const imgStream = spriteData.img
    .pipe(buffer())
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images/sprite'));

  // Собираем SCSS
  const cssStream = spriteData.css
    .pipe(replace('0px', '0'))
    .pipe(gulp.dest('./src/static/scss/utils'));

  return merge(imgStream, cssStream);
};
