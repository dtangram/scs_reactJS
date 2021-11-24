var gulp = require("gulp"),
	uglify = require("gulp-uglify"),
	minifyCSS = require("gulp-minify-css"),
	plumber = require("gulp-plumber"),
	concat = require("gulp-concat"),
	watch = require('gulp-watch');

//Concat Script Task
// gulp.task("concatJS", function() {
// 	return gulp.src(["js/app.js", "js/main.js"])
// 	.pipe(plumber())
// 	.pipe(concat("concat-scripts.js"))
// 	.pipe(gulp.dest("js"))
// });

//Uglify Scripts Task
gulp.task("scriptsOne", gulp.series(
	function() {
		return gulp.src("reactjs/public/js/index.js")
		.pipe(plumber())
		.pipe(concat("miniScriptsOne.js"))
		.pipe(uglify())
		.pipe(gulp.dest("reactjs/public/js"));
	}
));

//Uglify Scripts Task
gulp.task("scriptsTwo", gulp.series(
	function() {
		return gulp.src("reactjs/public/js/playCntrls.js")
		.pipe(plumber())
		.pipe(concat("miniScriptsPlayCntrls.js"))
		.pipe(uglify())
		.pipe(gulp.dest("reactjs/public/js"));
	}
));

//Minify Styles Task
gulp.task("minify-css", gulp.series(
	function() {
		return gulp.src("reactjs/public/css/prekStyles.css")
		.pipe(plumber())
		.pipe(concat("miniCSS.css"))
		.pipe(minifyCSS())
		.pipe(gulp.dest("reactjs/public/css"))
	}
));

//Watch Tasks
gulp.task("watch", gulp.series(
	function() {
		gulp.watch("reactjs/public/js/index.js", gulp.series(["scriptsOne"]));
		gulp.watch("reactjs/public/js/playCntrls.js", gulp.series(["scriptsTwo"]));
		gulp.watch("reactjs/public/css/prekStyles.css", gulp.series(["minify-css"]));
	}
));

gulp.task("default", gulp.series("watch", "scriptsOne", "scriptsTwo", "minify-css"));
