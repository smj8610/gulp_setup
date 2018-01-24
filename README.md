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
`npm install --save-dev gulp-cssmin gulp-rename gulp-sass`

### gulp-sassのインストール時のエラ
エラーメッセージ
>gyp ERR! configure error
gyp ERR! stack Error: EACCES: permission denied, mkdir '/Users/mc00180/Desktop/gulp/node_modules/node-sass/build'
gyp ERR! System Darwin 16.7.0
gyp ERR! command "/Users/mc00180/.nvm/versions/node/v8.9.0/bin/node" "/Users/mc00180/Desktop/gulp/node_modules/node-gyp/bin/node-gyp.js" "rebuild" "--verbose" "--libsass_ext=" "--libsass_cflags=" "--libsass_ldflags=" "--libsass_library="
gyp ERR! cwd /Users/mc00180/Desktop/gulp/node_modules/node-sass
gyp ERR! node -v v8.9.0
gyp ERR! node-gyp -v v3.6.2
gyp ERR! not ok
Build failed with error code: 1
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! node-sass@4.7.2 postinstall: node scripts/build.js
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the node-sass@4.7.2 postinstall script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm ERR! A complete log of this run can be found in:
npm ERR!/Users/mc00180/.npm/_logs/2018-01-24T01_49_53_713Z-debug.log

nvmコマンドでnodeのバージョンを切り替えで解決
`nvm install 6.4.0`
`nvm use 6.4.0`


## プラグインの設定
### gulpfile.jsを作成
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
