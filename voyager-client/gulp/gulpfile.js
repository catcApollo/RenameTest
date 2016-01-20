var gulp = require('gulp'),
    usemin = require('gulp-usemin'),
    wrap = require('gulp-wrap'),
    connect = require('gulp-connect'),
    watch = require('gulp-watch'),
    minifyCss = require('gulp-minify-css'),
    minifyJs = require('gulp-uglify'),
    concat = require('gulp-concat'),
    less = require('gulp-less'),
   /* sass = require("gulp-sass"),*/
    rename = require('gulp-rename'),
    minifyHTML = require('gulp-minify-html'),
    ngHtml2Js = require("gulp-ng-html2js");

var paths = {
    scripts: '../app/components/**/*.js',
    styles: '../app/styles/scss/**/*.*',
    images: '../app/styles/img/**/*.*',
    templates: '../app/components/**/*.tpl.html',
    index: '../app/index.html',
    bower_fonts: '../app/*/**/*.{ttf,woff,eof,svg}',
    bower_scripts: '../app/js/**/*.js',
};

/**
 * Handle bower components from inde
 */
gulp.task('usemin', function() {
    return gulp.src(paths.index)
        	.pipe(usemin({        	     	
            js: [minifyJs()],
            css: [minifyCss({keepSpecialComments: 0}), 'concat'],
        }))
        .pipe(gulp.dest('../dist/'));
});



/**
 * Copy assets
 */
gulp.task('build-assets', ['copy-bower_fonts']);

gulp.task('copy-bower_fonts', function() {
    return gulp.src(paths.bower_fonts)
        .pipe(rename({
            dirname: '/fonts'
        }))
        .pipe(gulp.dest('../dist/styles'));
});

/**
 * Handle custom files
 */
gulp.task('build-custom', ['custom-images', 'custom-js', 'custom-templates']);


/**
 * Copy assets
 */
gulp.task('build-bower-scripts', function(){
    return gulp.src(paths.bower_scripts)
    .pipe(gulp.dest('../dist/js'));	
});

gulp.task('custom-images', function() {
    return gulp.src(paths.images)
        .pipe(gulp.dest('../dist/img'));
});

gulp.task('custom-js', function() {
    return gulp.src(paths.scripts)
        //.pipe(minifyJs())
        .pipe(concat('app.js'))
        .pipe(gulp.dest('../dist/js'));
});

/*gulp.task('custom-less', function() {
    return gulp.src(paths.styles)
        .pipe(less())
        .pipe(gulp.dest('dist/css'));
});*/

gulp.task('custom-sass', function() {
	  return gulp.src()
	    .pipe(sass())
	    .pipe(gulp.dest('../dist/styles/css'));
	});

gulp.task('custom-templates', function() {
    return gulp.src(paths.templates)    
    	.pipe(ngHtml2Js({
    		moduleName : "app.templates"
    	}))
    	.pipe(concat('app.templete.js'))
    	.pipe(gulp.dest("../dist/js"));

});





/**
 * Live reload server
 */
gulp.task('webserver', function() {
    connect.server({
        root: '../dist',
        livereload: true,
        port: 3003
    });
});

/**
 * Watch custom files
 */
gulp.task('watch', function() {
    gulp.watch([paths.images], ['custom-images']);
    gulp.watch([paths.styles], ['custom-sass']);
    gulp.watch([paths.scripts], ['custom-js']);
    gulp.watch([paths.templates], ['custom-templates']);
    gulp.watch([paths.index], ['usemin']);
});

gulp.task('livereload', function() {
    gulp.src(['../dist/**/*.*'])
        .pipe(watch())
        .pipe(connect.reload());
});





/**
 * Gulp tasks
 */
gulp.task('build', ['usemin', 'build-assets', 'build-custom', 'build-bower-scripts', 'custom-templates']);
gulp.task('default', ['build', 'webserver', 'livereload']);