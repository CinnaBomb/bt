var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

gulp.task('connect', function(){
  connect.server({
    root: './',
    livereload: true
  });
});

gulp.task('sass', function(){
  return gulp.src('./scss/*.scss')
  .pipe(sass( {errLogToConsole: true }))
  .pipe(gulp.dest('./css'))
  .pipe(connect.reload());
});

gulp.task('html', function () {
  gulp.src('../bigtop/*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function(){
  gulp.watch('scss/*.scss', ['sass']);
  gulp.watch(['../bigtop/*.html'], ['html']);
});

gulp.task('default', ['connect', 'watch', 'sass']);