'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./sass/**/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build'))
    .pipe(gulp.dest('./demo/app'));
});

// gulp.task('copy', function() {
//     gulp.src('./build/app.css')
//     .pipe(gulp.dest('./built/app')
//     .pipe(gulp.dest('./demo/app'));
// });
 
gulp.task('sass:watch', ['sass'], function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});