const gulp = require("gulp");
const uglify = require("gulp-uglify");
const sass = require('gulp-sass')(require('sass'));
const minifyCSS = require("gulp-minify-css");
const plumber = require("gulp-plumber");
const concat = require("gulp-concat");
const watch = require('gulp-watch');

//Uglify Scripts Task
gulp.task("scriptsOne", gulp.series(() => {
		return gulp.src("reactjs/public/js/index.js")
		.pipe(plumber())
		.pipe(concat("miniScriptsOne.js"))
		.pipe(uglify())
		.pipe(gulp.dest("reactjs/public/js"));
	}
));

//Uglify Scripts Task
gulp.task("scriptsTwo", gulp.series(() => {
		return gulp.src("reactjs/public/js/playCntrls.js")
		.pipe(plumber())
		.pipe(concat("miniScriptsPlayCntrls.js"))
		.pipe(uglify())
		.pipe(gulp.dest("reactjs/public/js"));
	}
));

// SASS Compile
gulp.task("stylesSASS", gulp.series(() => {
		return gulp.src("sass/main.scss")
		.pipe(sass({
		  style: "expanded"
		}))
		.pipe(plumber())
		.pipe(minifyCSS())
		.pipe(gulp.dest("reactjs/public/css"));
	}
));

//Watch Tasks
gulp.task("watch", gulp.series(() => {
		gulp.watch("reactjs/public/js/index.js", gulp.series(["scriptsOne"]));
		gulp.watch("reactjs/public/js/playCntrls.js", gulp.series(["scriptsTwo"]));
		gulp.watch("sass/base/base.scss", gulp.series(["stylesSASS"]));
	}
));

gulp.task("default", gulp.series("watch", "scriptsOne", "scriptsTwo", "stylesSASS"));
