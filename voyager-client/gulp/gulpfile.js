var gulp = require('gulp'),
    usemin = require('gulp-usemin'),
    wrap = require('gulp-wrap'),
    connect = require('gulp-connect'),
    watch = require('gulp-watch'),
    minifyCss = require('gulp-minify-css'),
    minifyJs = require('gulp-uglify'),
    concat = require('gulp-concat'),
    less = require('gulp-less'),
    sass = require("gulp-sass"),
    rename = require('gulp-rename'),
    minifyHTML = require('gulp-minify-html'),
    ngHtml2Js = require("gulp-ng-html2js");

//Testing tools
var mochaSelenium = require("gulp-mocha-selenium"),
	webdriver = require('selenium-webdriver'),
	SeleniumServer = require('selenium-webdriver/remote').SeleniumServer,
	SeleniumJar = require('selenium-server-standalone-jar');

var paths = {
    scripts: '../app/components/**/*.js',
    styles: '../app/styles/scss/**/*.*',
    images: '../app/styles/img/**/*.*',
    templates: '../app/components/**/*.tpl.html',
    index: '../app/index.html',
    bower_fonts: '../app/*/**/*.{ttf,woff,eof,svg}',
    bower_scripts: '../app/js/**/*.js',
    test_scripts: '../app/test/*.*'
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
gulp.task('build-custom', ['custom-images', 'custom-js', 'custom-sass', 'custom-templates']);


/**
 * Copy assets
 */
gulp.task('build-bower-scripts', function(){
    return gulp.src(paths.bower_scripts)
    .pipe(gulp.dest('../dist/js'));	
});

gulp.task('custom-images', function() {
    return gulp.src(paths.images)
        .pipe(gulp.dest('../dist/img'))
        .pipe(connect.reload());
});

gulp.task('custom-js', function() {
    return gulp.src(paths.scripts)
        //.pipe(minifyJs())
        .pipe(concat('app.js'))
        .pipe(gulp.dest('../dist/js'))
        .pipe(connect.reload());
});

/*gulp.task('custom-less', function() {
    return gulp.src(paths.styles)
        .pipe(less())
        .pipe(gulp.dest('dist/css'));
});*/

gulp.task('custom-sass', function() {
	  return gulp.src(paths.styles)
	    .pipe(sass())
	    .pipe(concat('styles.css'))
	    .pipe(gulp.dest('../dist/styles/css'))
	    .pipe(connect.reload());
	});

gulp.task('custom-templates', function() {
    return gulp.src(paths.templates)    
    	.pipe(ngHtml2Js({
    		moduleName : "app.templates"
    	}))
    	.pipe(concat('app.templete.js'))
    	.pipe(gulp.dest("../dist/js"))
    	.pipe(connect.reload());

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
 * Observe if files are modified and reload web page
 */
gulp.task('watch', function() {
    gulp.watch([paths.images], ['custom-images']);
    gulp.watch([paths.styles], ['custom-sass']);
    gulp.watch([paths.scripts], ['custom-js']);
    gulp.watch([paths.templates], ['custom-templates']);
    gulp.watch([paths.index], ['usemin']);
});

/**
 * Selenium Test
 * Error handler and Configuration
 */

/*gulp.task('seleniumServerInit', function(){
	console.log(SeleniumJar.path);
	var server = new SeleniumServer(SeleniumJar.path, {
		port: 4444
	});
	server.start();
	
	var driver = new webdriver.Builder().
    usingServer(server.address()).
    withCapabilities(webdriver.Capabilities.firefox()).
    build();
	
});
*/
function handleError(err){
	console.log(err.toString());
	this.emit('end');
}

gulp.task('seleniumTest', function(){
	return gulp.src(paths.test_scripts, {read: false})
		.pipe(mochaSelenium({
			browserName: 'chrome',
			host: '127.0.0.1',
			port: '4444',
			reporter: 'nyan',
			timeout: '100000'
		}).on("error", handleError));
});

gulp.task('test', ['seleniumServerInit', 'seleniumTest']);

/**
 * Gulp tasks
 */
gulp.task('build', ['usemin', 'build-assets', 'build-custom', 'build-bower-scripts', 'watch'/*'custom-templates'*/]);
gulp.task('default', ['build', 'webserver']);