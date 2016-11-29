/* ********************************************************************** */
/* ***************************** Variables ***************************** */
/* ********************************************************************** */
/* ------------------------------- plugin ------------------------------- */
var gulp = require("gulp");
var gutil = require("gulp-util");
var gConcat = require("gulp-concat");
var uglifyJS = require("gulp-uglify");
var sass = require("gulp-sass");
var cleanCSS = require("gulp-clean-css");
var sourceMaps = require("gulp-sourcemaps");




/* ********************************************************************** */
/* ***************************** DIRECTORY ***************************** */
/* ********************************************************************** */
/* --------- JS --------- */
var vendorJS = [
	'assets/js/vendor/jquery-1.11.2.min.js',
	'assets/js/vendor/bootstrap.min.js',
	'assets/js/vendor/verge.min.js',
	'assets/js/vendor/slick.min.js',
	'assets/js/vendor/TweenMax.min.js',
	'assets/js/vendor/jquery.validate.min.js',
	'assets/js/vendor/additional-methods.js',
	'assets/js/vendor/jquery.matchHeight.js',
	'assets/js/vendor/odometer.min.js',
	'assets/fancybox/jquery.fancybox.js',
];
var customJS = [
	'assets/js/main.js'
];

/* --------- CSS --------- */
var vendorCSS = [
	'assets/css/bootstrap.min.css',
	'assets/css/animate.min.css',
	'assets/css/slick.css',
	'assets/css/slick-theme.css',
	'assets/fancybox/jquery.fancybox.css',
	'assets/css/glyph.css',
	'assets/css/odometer-theme-minimal.css'
];
var customSass = [
	'assets/sass/scss/styles.scss'
];




/* ********************************************************************** */
/* ***************************** TASK ***************************** */
/* ********************************************************************** */
/* ------------------------------- External JS ------------------------------- */
/* HEAD block 
		<script src="https://cliquestaging.com/alalali-pasta-2016/assets/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>
*/

/* FOOTER block 
		<script type="text/javascript" src="http://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-57ea551be9aa12e6"></script>
*/


/* ------------------------------- Concat and Uglify JS ------------------------------- */
gulp.task("uglifyVendorJS", function(){
	gulp.src(vendorJS)
		.pipe(sourceMaps.init())
		.pipe(gConcat("vendor.js"))
		.on("error", function(err){
			gutil.log('Error from concat vendor JS in compress task', err.toString());
		})
		.pipe(uglifyJS())
		.on("error", function(err){
			gutil.log('Error from uglify vendor JS in compress task', err.toString());
		})
		.pipe(sourceMaps.write("."))
		.pipe(gulp.dest("assets/js"));
});
gulp.task("uglifyCustomJS", function(){
	gulp.src(customJS)
		.pipe(sourceMaps.init())
		.pipe(gConcat("custom.js"))
		.on("error", function(err){
			gutil.log('Error from concat custom JS in compress task', err.toString());
		})
		.pipe(uglifyJS())
		.on("error", function(err){
			gutil.log('Error from uglify custom JS in compress task', err.toString());
		})
		.pipe(sourceMaps.write("."))
		.pipe(gulp.dest("assets/js"));
});

/* ------------------------------- Compile, Concat and Uglify CSS ------------------------------- */
gulp.task("uglifyVendorCSS", function(){
	gulp.src(vendorCSS)
		.pipe(sourceMaps.init())
		.pipe(gConcat("vendor.css"))
		.pipe(cleanCSS())
		.pipe(sourceMaps.write("."))
		.pipe(gulp.dest('assets/css'));
});
gulp.task("uglifyCustomSass", function(){
	gulp.src(customSass)
		.pipe(sourceMaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(gConcat("custom.css"))
		.pipe(cleanCSS())
		.pipe(sourceMaps.write("."))
		.pipe(gulp.dest('assets/css'));
});

/* ------------------------------- Watch ------------------------------- */
gulp.task("watch", function(){
	// JS
	gulp.watch(vendorJS, ["uglifyVendorJS"]);
	gulp.watch(customJS, ["uglifyCustomJS"]);
	// CSS
	gulp.watch(vendorCSS, ["uglifyVendorCSS"]);
	gulp.watch(customSass, ["uglifyCustomSass"]);
});

/* ------------------------------- Default ------------------------------- */
gulp.task("default", ["uglifyVendorJS", "uglifyCustomJS", "uglifyVendorCSS", "uglifyCustomSass", "watch"]);