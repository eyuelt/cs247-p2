var gulp = require('gulp');
var del = require('del');

var browserSync = require('browser-sync');
var reload = browserSync.reload;
var browserSyncPort = 8001;


//Clean
gulp.task('clean:index', function() {
    del(['dist/index.html']);
});
gulp.task('clean:styles', function() {
    del(['dist/styles/**/*']);
});
gulp.task('clean:scripts', function() {
    del(['dist/scripts/**/*']);
});
gulp.task('clean:images', function() {
    del(['dist/images/**/*']);
});
gulp.task('clean', ['clean:index', 'clean:styles', 'clean:scripts', 'clean:images']);


//Build
gulp.task('build:index', ['clean:index'], function() {
    return gulp.src('src/index.html')
    .pipe(gulp.dest('dist/'))
    .pipe(reload({stream:true}));
});
gulp.task('build:styles', ['clean:styles'], function() {
    return gulp.src('src/styles/**/*.css')
    .pipe(gulp.dest('dist/styles/'))
    .pipe(reload({stream:true}));
});
gulp.task('build:scripts', ['clean:scripts'], function() {
    return gulp.src('src/scripts/**/*.js')
    .pipe(gulp.dest('dist/scripts/'))
    .pipe(reload({stream:true}));
});
gulp.task('build:images', ['clean:images'], function() {
    return gulp.src('src/images/**/*')
    .pipe(gulp.dest('dist/images/'))
    .pipe(reload({stream:true}));
});
gulp.task('build', ['build:index', 'build:styles', 'build:scripts', 'build:images']);


//Serve
gulp.task('watch', function() {
    gulp.watch('src/index.html', ['build:index']);
    gulp.watch('src/styles/**/*', ['build:styles']);
    gulp.watch('src/scripts/**/*', ['build:scripts']);
    gulp.watch('src/images/**/*', ['build:images']);
});
gulp.task('browser-sync', ['build', 'watch'], function() {
    browserSync({
        server: { baseDir: "./dist/" }
    });
});


gulp.task('default', ['browser-sync']);
