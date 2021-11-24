const gulp = require("gulp");
const terser = require("gulp-terser");
const minifyCSS = require("gulp-minify-css");
const plumber = require("gulp-plumber");
const concat = require("gulp-concat");
const watch = require('gulp-watch');

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
		return gulp.src("js/index.js")
		.pipe(plumber())
		.pipe(concat("miniScriptsOne.js"))
		.pipe(terser())
		.pipe(gulp.dest("js"));
	}
));

//Uglify Scripts Task
gulp.task("scriptsTwo", gulp.series(
	function() {
		return gulp.src("js/playCntrls.js")
		.pipe(plumber())
		.pipe(concat("miniScriptsPlayCntrls.js"))
		.pipe(terser())
		.pipe(gulp.dest("js"));
	}
));

//Minify Styles Task
gulp.task("minify-css", gulp.series(
	function() {
		return gulp.src("css/styles.css")
		.pipe(plumber())
		.pipe(concat("miniCSS.css"))
		.pipe(minifyCSS())
		.pipe(gulp.dest("css"))
	}
));

//Watch Tasks
gulp.task("watch", gulp.series(
	function() {
		gulp.watch("js/index.js", gulp.series(["scriptsOne"]));
		gulp.watch("js/playCntrls.js", gulp.series(["scriptsTwo"]));
		gulp.watch("css/styles.css", gulp.series(["minify-css"]));
	}
));

gulp.task("default", gulp.series("watch", "scriptsOne", "scriptsTwo", "minify-css"));
