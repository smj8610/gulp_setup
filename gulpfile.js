//プラグイン等
var gulp = require('gulp');
var sass = require('gulp-sass');

//Task
gulp.task('sass',function(){
	gulp.src('./css/style.scss')//圧縮元ファイル
	.pipe(sass({outputStyle: 'compressed'}))
	.pipe(gulp.dest('./css'));
});

//Watch
gulp.task('watch',function(){
	gulp.watch('./css/style.scss', ['sass'])
});

gulp.task('default',['sass','watch']);
