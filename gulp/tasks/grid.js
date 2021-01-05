const path = require('path');
const smartGrid = require('smart-grid');
const gridOptPath = './../../smartgrid.js';

module.exports = function grid(done) {
  delete require.cache[path.resolve('./smartgrid.js')];
  let options = require(gridOptPath);
  smartGrid('./src/static/scss', options);
  done();
}
