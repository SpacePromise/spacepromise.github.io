// Less configuration
var gulp = require('gulp');
var less = require('gulp-less');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task('less', function() {
    // All .less files; excluding node_modules folder and partials
    var targets = ['!node_modules/**/*.*', '**/[^_]*.less'];

    // Generate css
    gulp.src(targets)
        .pipe(less().on('error', function(error) {
            console.error(error)
        }))
        .pipe(gulp.dest(function(f) {
            console.log("Generated " + f.path);
            return f.base;
        }));

    // Generate min.css
    gulp.src(targets)
        .pipe(less().on('error', function(error) {
            console.error(error)
        }))
        .pipe(cssmin().on('error', function(error) {
            console.error(error);
        }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(function(f) {
            console.log("Generated " + f.path);
            return f.base;
        }));
});

gulp.task('default', ['less'], function() {
    gulp.watch('**/*.less', ['less']);
});
