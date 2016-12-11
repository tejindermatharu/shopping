/* eslint-disable no-var, strict, prefer-arrow-callback */
'use strict';

var gulp = require('gulp');

gulp.task('test', function (done) {
    console.log('test gulp');
});

gulp.task('copyJs',  function () {
    // copy the js and map files generated from useref to 
    // the real app directory
    return gulp.src('index/app/*.*')
        .pipe(gulp.dest('app'));
});