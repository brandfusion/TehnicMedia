function defaultTask(cb) {
    // place code for your default task here
    cb();
}

exports.default = defaultTask

const gulp = require('gulp');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');

const uglify = require('gulp-uglify');
const pipeline = require('readable-stream').pipeline;
var concat = require('gulp-concat');


/*run command 'gulp postcss' to minify css*/
gulp.task('postcss', function () {
    var plugin = [
        cssnano()
    ]
    return gulp.src('Designs/TTonlineNew/css/custom.css')
        .pipe(postcss(plugin))
        .pipe(gulp.dest('Designs/TTonlineNew/dist'));
});

/*run command 'gulp compressjs' to bundle and minify js*/

gulp.task('compressjs', function () {
    return pipeline(
        gulp.src('Designs/TTonlineNew/js/**/*.js'),
        uglify(),
        concat('bundle.min.js'),
        gulp.dest('Designs/TTonlineNew/dist')
    );
});