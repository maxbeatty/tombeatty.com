var fs = require('fs');
var path = require('path');
var gulp = require('gulp');

// dist gets cleaned so just rewrite CNAME file for gh-pages
gulp.task('cname', function(cb) {
  fs.writeFile(path.resolve(__dirname, '../dist/CNAME'), 'www.tombeatty.com', cb);
});
