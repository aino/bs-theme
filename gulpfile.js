var gulp = require('gulp')
var less = require('gulp-less')
var rename = require('gulp-rename')
var watch = require('gulp-watch')
var util = require('gulp-util')
var http = require('http')
var ecstatic = require('ecstatic')

var task = {}

task.less = function() {
  gulp.src('./less/bs-theme.less')
    .pipe(less())
    .pipe(rename('bs-theme.css'))
    .pipe(gulp.dest('./dist/css'));
}

task.watch = function() {
  watch({glob: './less/**/*.less'}, function() { task.less() })
}

gulp.task( 'default', function() {
  http.createServer(
    ecstatic({ root: __dirname, autoIndex: true })
  ).listen(8000);
  util.log('Listening on :8000');
  task.less()
  task.watch()
})