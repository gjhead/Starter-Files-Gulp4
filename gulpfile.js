// Include Gulp of course.
const gulp = require("gulp");

// Load some plugins n'at

const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const jshint = require('gulp-jshint');
const stylish = require('jshint-stylish');

const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');

const kit = require('gulp-kit');

const livereload = require('gulp-livereload');

// Define tasks after requiring dependencies


function css() {
    return (
        gulp
			.src('./a/sass/screen.scss')
			
			.pipe(sourcemaps.init())
			.pipe(sass())
			.on('error', sass.logError)
            
			.pipe(postcss(
				[
					autoprefixer({browsers: 'last 3 versions'}), 
					cssnano({})
				]
			))
            
			.pipe(sourcemaps.write('.'))			
			.pipe(gulp.dest('./site/css'))
    );
}


function lint() {	
	return (
        gulp
			.src('./a/js/script.js')
			.pipe(jshint())
			.pipe(jshint.reporter(stylish))
    );
}


// js builds will most likely change based on project.
function scripts() {	
	return (
        gulp
			.src([
				'./a/js/jquery/jquery.js', 
				'./a/js/plugins/**/*.js', 
				'./a/js/script.js'
			])
			
			.pipe(concat('scripts.js'))
			.pipe(gulp.dest('./site/js'))
			.pipe(rename('scripts.min.js'))
			.pipe(uglify())
			.pipe(gulp.dest('./site/js'))
    );
}

// an extremely simply templating build.  need to relook at this eventually
function html() {	
	return (
        gulp
			.src('./a/kit/**/*.kit')
			.pipe(kit())
			.pipe(gulp.dest('./site/'))
    );
}


// Copy some files.  Remember to combine these into the copy task.
function copyStatic() {	
	return (
        gulp
			.src('./static/**')
			.pipe(gulp.dest('./site/assets/'))
    );
}

function copyBase() {	
	return (
        gulp
			.src('./basedir/**')
			.pipe(gulp.dest('./site/'))
    );
}


// Watch task to run while dev-ing n'at
function watch() {	
  	livereload({ start: true })
    livereload.listen()
	gulp.watch('./a/kit/**/*.kit', html);
  	gulp.watch('./a/sass/**/*.scss', css);
  	gulp.watch('./a/js/**/*.js', js);
  	gulp.watch(
	    [
	      './static/**',
	      './basedir/**'
	    ],
    copy
  );
  
}

const js 			= 	gulp.series(lint, scripts);
const copy 			=	gulp.parallel(copyStatic, copyBase);

const dev 			= 	gulp.parallel(css, js, html, watch);
const build			= 	gulp.parallel(css, js, html);

exports.css 		= css;
exports.lint		= lint;
exports.js 			= js;
exports.html 		= html;
exports.copy 		= copy;
exports.watch 		= watch;

exports.build 		= build;
exports.dev 		= dev;

