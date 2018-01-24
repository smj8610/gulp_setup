# gulp_setup

## node.jsインストール
https://nodejs.org/en/

## gulpインストール
`npm install -g gulp`  
`npm install --save-dev gulp`

## package.json作成
`npm init`  
全てEnter

## プラグインをインストール
`npm install --save-dev gulp-cssmin gulp-rename`

## プラグインの設定
### gulpfile.jsを作成
    `//プラグイン等
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

    //Watch`
