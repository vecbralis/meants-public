'use strict';
var gulp   = require('gulp'),
    watch  = require('gulp-watch'),
    ts     = require('gulp-typescript');

var typescriptFiles = [
	'./**/*.ts',
	'!typings/**/*.ts',
	'!interface/**/*.ts',
	'!node_modules/**/*.ts',
	'!bower_components/**/*.ts'
];

//Typescript task
gulp.task('typescript', function(){
  return gulp.src(typescriptFiles)
        .pipe(ts({
            module: 'none'
        })).js.pipe(gulp.dest('./'));
});

//Default watch task
gulp.task('watch', function(){

  //Watch all scripts
  watch(typescriptFiles, function(){
    gulp.start(['typescript']);
  });

});

gulp.task('default', ['typescript']);