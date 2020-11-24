const gulp = require('gulp');
const scripts = require('./gulp/tasks/scripts');
const fonts = require('./gulp/tasks/fonts');
const vendorsJs = require('./gulp/tasks/vendorsJS');
const vendorsCss = require('./gulp/tasks/vendorsCSS');
const imageMinify = require('./gulp/tasks/imageMinify');
const styles = require('./gulp/tasks/styles');
const clean = require('./gulp/tasks/clean');
const pug2html = require('./gulp/tasks/pug');
const spriteSVG = require('./gulp/tasks/spriteSVG');
const serve = require('./gulp/tasks/serve');
const spritePNG = require('./gulp/tasks/spritePNG');

global.$ = {
  bs: require('browser-sync').create(),
}

const build = gulp.parallel(
  imageMinify,
  scripts,
  vendorsJs,
  vendorsCss,
  styles,
  spriteSVG,
  spritePNG,
  fonts,
  pug2html
);

exports.default = gulp.series(
  clean,
  build,
  serve
);

exports.build = gulp.series(
  clean,
  build
);
