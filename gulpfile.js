//プラグイン等
var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

//Task
gulp.task('sass',function(){
	gulp.src('./css/*.scss')//圧縮元ファイル
	.pipe(sass({outputStyle: 'compressed'}))
	.pipe(gulp.dest('./css'));
});
gulp.task('imagemin',function(){
	gulp.src('./img/*.png')
	.pipe(imagemin({
		use: [pngquant()]
	}))
	.pipe(gulp.dest("compressed_images"));
});

//Watch
gulp.task('watch',function(){
	gulp.watch('./css/style.scss', ['sass'])
});

gulp.task('default',['sass','watch']);
