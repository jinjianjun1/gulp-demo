var gulp = require('gulp')
var cssnano = require ('gulp-cssnano')
var sourcemaps = require ('gulp-sourcemaps')
// import gulp from 'gulp'
// import cssnano from 'glup-cssnano'
// import sourcemaps from 'gulp-sourcemaps'
gulp.task('css',function(){
    return gulp.src('./src/css/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(cssnano())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dest'))
    
})
gulp.watch('./src.css/**/*.css',['css'])
gulp.task('default',['css'])
