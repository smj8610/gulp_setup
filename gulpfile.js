//プラグイン等
var gulp = require('gulp');
var cssmin =require('gulp-cssmin');
var rename =require('gulp-rename');
var sass = require('gulp-sass');

//Task
gulp.task('cssmin',function(){
	gulp.src('css/style.css')//圧縮元ファイル
	.pipe(cssmin())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('css'));//圧縮されたファイルの生成先
});

//Watch
gulp.task('watch',function(){
	gulp.watch('css/style.css',['cssmin'])
});

gulp.task('default',['cssmin','watch']);
