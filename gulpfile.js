const gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('hello', function(done) {
    console.log("Hello World!");
    done();
});

gulp.task('sass', function () {
    return  gulp.src('./src/scss/index.scss').pipe(sass()).pipe(gulp.dest('./src/css'));
});
