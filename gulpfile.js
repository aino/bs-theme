var gulp = require('gulp')
var less = require('gulp-less')
var minify = require('gulp-minify-css')
var es = require('event-stream')
var path = require('path')
var rename = require('gulp-rename')

gulp.task('less', function() {
  console.log('LESS')
  gulp.src('./less/bs-theme.less')
    .pipe(less())
    .on('error', function(e) {
      console.dir(e)
    })
    .pipe(rename('bs-theme.css'))
    .pipe(gulp.dest('./dist/css'));
})