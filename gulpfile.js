var gulp = require('gulp'),
    less = require('gulp-less'),
    watch = require('gulp-watch'),
    plumber = require('gulp-plumber'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload'),
    del = require('del'),
    path = require('path'),
    src = [
        'app/app.js',
        'app/home/*.js',
        'app/shared/*.js',
        '!app/**/*test.js'
    ];

gulp.task('less', function() {
    return gulp.src('app/less/bootstrap.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(gulp.dest('app/css'))
        .pipe(livereload());
});

gulp.task('scripts', function() {
    return gulp.src(src)
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        //.pipe(jshint.reporter('fail'))
        .pipe(concat('app.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'))
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch([
        'app/less/*.less'
    ], ['less']);
    gulp.watch([
        'app/app.js',
        'app/home/*.js',
        'app/shared/*.js',
        '!app/**/*test.js'
    ], [ 'scripts']);
    gulp.watch(['app/css/**', 'app/js/**']).on('change', livereload.changed);
});