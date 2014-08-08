var path = require('path');
var gulp = require('gulp');
var Pageres = require('pageres');

gulp.task('pageres', function(cb) {
  var pageres = new Pageres({delay: 2})
    .src('localhost:3000', [
      'iPhone',
      'iPhone 5s',
      '480x320', // iPhone-Landscape
      'iPad',
      '1024x768', // iPad-Landscape
      '1900x1080', // hd
    ]).dest(path.resolve(__dirname, '../.tmp/pageres'));

  pageres.run(cb);
});
