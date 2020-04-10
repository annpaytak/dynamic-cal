const gulp = require('gulp'),
    sass = require('gulp-sass');


gulp.task('default', function () {
    gulp.watch('./src/scss/index.scss',function(e){
        return  gulp.src(e.path).pipe(sass()).pipe(gulp.dest('./src/css'));
    })
    
});