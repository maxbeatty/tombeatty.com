var gulp = require('gulp'),
    sass = require('gulp-sass'),
    size = require('gulp-size'),
    rename = require('gulp-rename'),
    minifyCSS = require('gulp-minify-css');

// Minify all css files in the css directory
// Run this in the root directory of the project with `gulp minify-css `
gulp.task('minify-css', function(){
  gulp.src('./css/i.css')
    .pipe(minifyCSS({keepSpecialComments: 0}))
    .pipe(rename('i.min.css'))
    .pipe(size({gzip:true, showFiles: true}))
    .pipe(gulp.dest('./css/'));
});

gulp.task('sass', function () {
    gulp.src('./scss/i.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
  gulp.watch('./scss/**/*.scss', ['sass', 'minify-css']);
});

gulp.task('default', ['sass', 'minify-css', 'watch']);
