//プラグイン等
var gulp = require('gulp');
var cssmin =require('gulp-cssmin');
var rename =require('gulp-rename');

//Task
gulp.task('cssmin',function(){
	gulp.src('css/style.css')//圧縮元ファイル
	.pipe(cssmin())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('css'));//圧縮されたファイルの生成先
});

//Watch
