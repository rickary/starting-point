//	Import Modules

var gulp = require("gulp"),
  sass = require("gulp-sass"),
  sassGlob = require("gulp-sass-glob"),
  autoprefixer = require("gulp-autoprefixer"),
  header = require("gulp-header"),
  pkg = require("./package.json"),
  cssnano = require("gulp-cssnano"),
  concat = require("gulp-concat"),
  uglify = require("gulp-uglify"),
  jshint = require("gulp-jshint");

//	Setup Banner

var banner = [
  "/**",
  " * <%= pkg.name %>",
  " * <%= pkg.description %>",
  " * @author <%= pkg.author.name %> <<%= pkg.author.email %>>",
  " */",
  ""
].join("\n");

gulp.task("sass", function() {
  gulp
    .src("_dev/styles/*.scss")
    .pipe(sassGlob())
    .pipe(
      sass().on("error", function(err) {
        console.error(err.message);
        this.emit("end");
      })
    )
    .pipe(header(banner, { pkg: pkg }))
    .pipe(gulp.dest("assets/css/"));
});

gulp.task("js", function() {
  gulp
    .src("_dev/scripts/*.js")
    .pipe(jshint())
    .pipe(jshint.reporter("default"))
    .pipe(concat("master.js"))
    .pipe(header(banner, { pkg: pkg }))
    .pipe(gulp.dest("assets/js/"));
});

gulp.task("watch", function() {
  gulp.watch("_dev/styles/**/*.scss", ["sass"]);
  gulp.watch("_dev/scripts/*.js", ["js"]);
});

gulp.task("build", function() {
  gulp
    .src("assets/css/*.css")
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        grid: true,
        flexbox: true
      })
    )
    .pipe(cssnano())
    .pipe(gulp.dest("assets/css/"));
  gulp
    .src("assets/js/master.js")
    .pipe(uglify())
    .pipe(gulp.dest("assets/js/"));
});

gulp.task("default", ["watch"]);
