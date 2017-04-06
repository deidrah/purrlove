var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('purrlove/scss/base.scss')
        .pipe(sass())
        .pipe(gulp.dest('purrlove/css'))
});
