/*
* Basic Gulp.js workflow
* for simple front-end projects
* author: Aaron John Schlosser
* homepage: http://www.aaronschlosser.com
* github: http://www.github.com/ajschlosser
*/
'use strict';

var gulp				= require("gulp"),
	gutil				= require("gulp-util"),
	watch				= require("gulp-watch"),
	sass				= require("gulp-sass"),
	jade				= require("gulp-jade-php"),
	plumber				= require("gulp-plumber"),
  livereload = require('gulp-livereload');

var paths = {
	styles: {
		src: "./scss/**/*.sass",
		dest: "stylesheets"
	},
	templates: {
		src: ['./templates/**/*.jade', '!./templates/**/_*.jade'],
		dest: "./"
	}
};

function handleError(err) {
	this.emit('end');
}


gulp.task('styles', function () {
  return gulp.src(paths.styles.src)
    .pipe(plumber())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .on("error", handleError)
    .pipe(plumber.stop())
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(livereload());
});


gulp.task("templates", function() {
	gulp.src(paths.templates.src)
		.pipe(plumber())
		.pipe(jade({
      locals:{
          $:function(str){
              return "<?php print $"+str+" ?>"
          }
      }
		}))
		.pipe(plumber.stop())
		.pipe(gulp.dest(paths.templates.dest))
    .pipe(livereload());
});

gulp.task("default", function() {
  livereload.listen();
	gulp.watch(paths.styles.src, ["styles"]);
	gulp.watch(paths.templates.src, ["templates"]);
});
