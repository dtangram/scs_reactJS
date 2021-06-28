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
gulp.task("scriptsOne", function() {
	return gulp.src("js/index.js")
	.pipe(plumber())
	.pipe(concat("miniScriptsOne.js"))
	.pipe(uglify())
	.pipe(gulp.dest("js"));
});

//Uglify Scripts Task
gulp.task("scriptsTwo", function() {
	return gulp.src("js/playCntrls.js")
	.pipe(plumber())
	.pipe(concat("miniScriptsPlayCntrls.js"))
	.pipe(uglify())
	.pipe(gulp.dest("js"));
});

//Minify Styles Task
gulp.task("minify-css", function() {
	return gulp.src("css/app.css")
	.pipe(plumber())
	.pipe(concat("miniCSS.css"))
	.pipe(minifyCSS())
	.pipe(gulp.dest("css"))
});

//Watch Tasks
gulp.task("watch", function() {
	gulp.watch("js/index.js", ["scripts"]);
	gulp.watch("js/playCntrls.js", ["scriptsTwo"]);
	gulp.watch("css/app.css", ["minify-css"]);
});

gulp.task("default", ["watch", "scriptsOne", "scriptsTwo", "minify-css"]);
