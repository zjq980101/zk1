var gulp = require('gulp');
var uglify = require('gulp-uglify');

var concat = require('gulp-concat');
// var concats = require('gulp-concat');
gulp.task('uglify',function(){
   gulp.src('./*.js')
       .pipe(uglify())
       .pipe(gulp.dest('./minjs'))
});


gulp.task('concat',function(){
   gulp.src('./*.js')
       .pipe(concat('h.js'))
       .pipe(gulp.dest('./hb'))
});

gulp.task('default',['uglify','concat']);
