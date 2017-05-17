var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var ngTemplates = require('gulp-ng-templates');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('js', ['templates'], function () {
    gulp.src([
        'templates.min.js',
        'app/**/services/module.js',
        'app/**/services/**/*.js',
        'app/**/directives/*/**/module.js',
        'app/**/directives/*/**/*.js',
        'app/**/directives/module.js',
        'app/**/controllers/module.js',
        'app/**/controllers/**/*.js',
        'app/**/module.js',
        'app/**/*.js',
        'app/app.js'
    ])
        .pipe(concat('gas.min.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('.'))
});

gulp.task('js-dev', ['templates'], function () {
    gulp.src([
        'templates.min.js',
        'app/**/services/module.js',
        'app/**/services/**/*.js',
        'app/**/directives/*/**/module.js',
        'app/**/directives/*/**/*.js',
        'app/**/directives/module.js',
        'app/**/controllers/module.js',
        'app/**/controllers/**/*.js',
        'app/**/module.js',
        'app/**/*.js',
        'app/app.js'
    ])
        .pipe(concat('gas.min.js'))
        .pipe(ngAnnotate())
        .pipe(gulp.dest('.'))
});

gulp.task('templates', function () {
    return gulp.src([
        './app/**/*.html',
        './app/base.html'
    ])
        .pipe(ngTemplates('gas.templates'))
        .pipe(gulp.dest('.'));
});

gulp.task('css', function () {
    return gulp.src(['./app/gas-front.css'])
        .pipe(rename('gas-front.min.css'))
        .pipe(minify())
        .pipe(gulp.dest('.'))
});

gulp.task('build', ['templates', 'js', 'css']);
gulp.task('dev', ['templates', 'js-dev', 'css']);