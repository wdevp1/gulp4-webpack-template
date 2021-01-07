const gulp = require('gulp');
const scripts = require('./gulp/tasks/scripts');
const fonts = require('./gulp/tasks/fonts');
const vendorsJs = require('./gulp/tasks/vendorsJS');
const vendorsCss = require('./gulp/tasks/vendorsCSS');
const imageMinify = require('./gulp/tasks/imageMinify');
const styles = require('./gulp/tasks/styles');
const clean = require('./gulp/tasks/clean');
const pug2html = require('./gulp/tasks/pug');
const html = require('./gulp/tasks/html');
const spriteSVG = require('./gulp/tasks/spriteSVG');
const servePug = require('./gulp/tasks/servePug');
const serveHtml = require('./gulp/tasks/serveHtml');
const spritePNG = require('./gulp/tasks/spritePNG');
const scriptsWebpack = require('./gulp/tasks/scriptswebpack');
const grid = require('./gulp/tasks/grid');

global.$ = {
  bs: require('browser-sync').create(),
}

const buildPug = gulp.parallel(
  imageMinify,
  scripts,
  scriptsWebpack,
  vendorsJs,
  vendorsCss,
  styles,
  spriteSVG,
  spritePNG,
  fonts,
  pug2html
);

const buildHtml = gulp.parallel(
  imageMinify,
  scripts,
  scriptsWebpack,
  vendorsJs,
  vendorsCss,
  styles,
  spriteSVG,
  spritePNG,
  fonts,
  html
);

exports.startPug = gulp.series(
  clean,
  grid,
  buildPug,
  servePug
);

exports.startHtml = gulp.series(
  clean,
  grid,
  buildHtml,
  serveHtml
);

exports.buildPug = gulp.series(
  clean,
  grid,
  buildPug
);

exports.buildHtml = gulp.series(
  clean,
  grid,
  buildHtml
);

exports.grid = gulp.series(grid);
