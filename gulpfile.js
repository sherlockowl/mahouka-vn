'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var streamify = require('gulp-streamify');

var SRC_PATH = './flux';
var DEST_PATH = './server/assets';

gulp.task('html', function () {
    gulp.src(SRC_PATH + '/*.html')
        .pipe(gulp.dest(DEST_PATH))
        .on('end', function () {
            console.log('>>> Html ok');
        });
});

gulp.task('js', function () {
    browserify(SRC_PATH + '/js/app.js')
        .transform('reactify', {stripTypes: true, es6: true})
        .bundle()
        .on('error', function (err) {
            console.log(err);
        })
        .pipe(source('app.js'))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest(DEST_PATH + '/js'))
        .on('end', function () {
            console.log('>>> Js ok');
        })
        .on('error', function (err) {
            console.log(err);
        });
});

gulp.task('css', function () {
    gulp.src(SRC_PATH + '/css/style.css')
        .pipe(uglifycss())
        .pipe(gulp.dest(DEST_PATH + '/css'))
        .on('end', function () {
            console.log('>>> Css ok');
        });
});

gulp.task('images', function () {
    gulp.src(SRC_PATH + '/images/**/*')
        .pipe(gulp.dest(DEST_PATH + '/images'))
        .on('end', function () {
            console.log('>>> Images ok');
        });
});

gulp.task('fonts', function () {
    gulp.src(SRC_PATH + '/fonts/**/*')
        .pipe(gulp.dest(DEST_PATH + '/fonts'))
        .on('end', function () {
            console.log('>>> Fonts ok');
        });
});

(function() {
    var watch = [];
    watch[0] = gulp.watch(SRC_PATH + '/*.html', ['html']);
    watch[1] = gulp.watch(SRC_PATH + '/js/**/*.*', ['js']);
    watch[2] = gulp.watch(SRC_PATH + '/css/**/*.*', ['css']);
    watch[3] = gulp.watch(SRC_PATH + '/images/**/*.*', ['images']);
    watch[4] = gulp.watch(SRC_PATH + '/fonts/**/*.*', ['fonts']);
    watch.forEach(function (item) {
        item.on('change', function (event) {
            console.log('>>> Detect change ' + event.path);
        });
        item.on('error', function (err) {
            console.log(err);
        });
    });
})();

gulp.task('default', ['html', 'js', 'css', 'images', 'fonts']);