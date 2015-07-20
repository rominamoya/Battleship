var gulp = require('gulp');

 connect = require('gulp-connect');

var  watch = require('gulp-watch');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var path = require('path');

var paths = {
  scripts: ['src/js/**/*.js']
};

gulp.task('watch', function() {
   // Watch less files
  watch('css/style.less', function() {
    gulp.start('less');
    });
  gulp.watch(paths.scripts, ['scripts']);
 });



 gulp.task('less', function () {
  return gulp.src('css/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('build'));
});

gulp.task('connect', function() {
  connect.server();
});
 

 // load all tasks that are needed for the build
gulp.task('build', ['watch', 'connect']);

// also make the build task default, as we don't have other tasks
gulp.task('default', ['watch', 'connect']);
