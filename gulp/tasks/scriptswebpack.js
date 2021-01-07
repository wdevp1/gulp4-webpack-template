const gulp = require('gulp');
const { argv } = require('yargs');
const webpack = require('webpack-stream');
const gulpIf = require('gulp-if');

isDev = process.argv[process.argv.length - 1] === '--prod' ? false : true;
isProd = !isDev;

const webpackConf = {
  output: {
    filename: 'all.js'
  },
  mode: isDev ? 'development': 'production',
  devtool: isDev ? 'eval-source-map': 'none',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      }
    ]
  }
}

module.exports = function webpackScripts(done) {
  gulp.src('./src/static/js/index.js')
    .pipe(webpack(webpackConf))
    .pipe(gulp.dest('./dist/js'))
    .pipe(gulpIf(!argv.prod, $.bs.stream()));
  done();
};
