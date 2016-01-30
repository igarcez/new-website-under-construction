/*
* @Author: Ian Garcez
* @Date:   2016-01-30 16:51:11
* @Last Modified by:   Ian Garcez
* @Last Modified time: 2016-01-30 16:55:11
*/

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-ruby-sass'),
    coffee = require('gulp-coffee'),
    livereload = require('gulp-livereload'),
    autoprefixer = require('gulp-autoprefixer');

var assets_folder = "assets/";

gulp.task('default', ['watch']);

gulp.task('sass', function(){
  return sass(assets_folder + 'sass/', {style: 'compressed'})
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest(assets_folder + 'css/'))
    .pipe(livereload());
});

gulp.task('coffee', function(){
  return gulp.src(assets_folder + 'js/coffee/**/*.coffee')
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest(assets_folder + 'js/'))
    .pipe(livereload());
});

gulp.task('watch', function(){
  livereload.listen();
  gulp.watch(assets_folder + 'sass/**/*.sass', ['sass']);
  gulp.watch(assets_folder + 'js/coffee/**/*.coffee', [coffee]);
})