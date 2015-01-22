/**
 * Created by Marco Romero on 1/8/2015.
 */
var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    flatten = require('gulp-flatten'),
    connect=require('gulp-connect'),
    mocha = require('gulp-mocha'),
    istanbul = require('gulp-istanbul'),
    jshint = require('gulp-jshint'),
    plato = require('gulp-plato');


    /**
     * Gulp Task to process only the index file.
     */
    gulp.task('index',function(){
       return gulp.src('./app/index.jade')
           .pipe(jade({pretty:true}))
           .pipe(gulp.dest('./dist'))
           .pipe(connect.reload());
    });
    gulp.task('html',['index'],function(){
       return gulp.src(['./app/**/*.jade','!./app/index.jade'])
           .pipe(jade({pretty:true}))
           .pipe(flatten())
           .pipe(gulp.dest('./dist/views'))
           .pipe(connect.reload());
    });

    gulp.task('css',function(){
       return gulp.src('./app/**/*.scss')
           .pipe(sass())
           .pipe(rename('spa.min.css'))
           .pipe(gulp.dest('./dist/styles'))
           .pipe(connect.reload());
    });

    gulp.task('js',function(){
       return browserify('./app/app.js',{debug:true}).bundle()
           .pipe(source('spa.bundle.js'))
           .pipe(gulp.dest('./dist/scripts'))
           .pipe(connect.reload());
    });

    gulp.task('serve',function(){
        connect.server({
            root:'./dist',
            livereload:true,
            port:3000
        })
    });

    gulp.task('watch',function(){
        gulp.watch('./app/**/*.jade',['html']);
        gulp.watch('./app/**/*.scss',['css']);
        gulp.watch('./app/**/*.js',['js']);
    });

    gulp.task('unit-test',function(cb){
        gulp.src(['./app/**/*.js','!./app/**/*_test.js'])
            .pipe(istanbul())
            .pipe(istanbul.hookRequire())
            .on('finish', function () {
                gulp.src(['./app/**/*_test.js'])
                    .pipe(mocha({reporter:'nyan'}))
                    .pipe(istanbul.writeReports())
                    .on('end', cb);
            });
    });

    gulp.task('lint-js',function(){
        return gulp.src('./app/**/*.js')
            .pipe(jshint('.jshintrc'))
            .pipe(jshint.reporter('jshint-stylish'));
    });

    gulp.task('report-complexity',function(cb){
        return gulp.src('./app/**/*.js')
            .pipe(plato('complexity-report',{title:'spa complexity',jshint:{browserify:true,
                quotmark:"single",
                camelcase:true,
                node:true,
                globals:{
                    require : true
                }}}))
    });

    gulp.task('analyze',['lint-js','report-complexity','unit-test']);

    gulp.task('default',['html','css','js','unit-test','serve','watch']);