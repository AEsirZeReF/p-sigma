const gulp = require("gulp");
const sass = require("gulp-sass");
const rename = require("gulp-rename");
const browserSync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");

/*function style(){
    return gulp.src('./index.scss')
    .pipe(sass({
        outputStyle:'extended',//compressed
        sourceComments :true
    }))
    .pipe(rename('estilos.css'))
    .pipe(autoprefixer({
        versions:['last 2 browsers']
    }))
    .pipe(gulp.dest('./public/css'))
    .pipe(browserSync.stream());
};
function watch(){
    browserSync.init({
        server:{
            baseDir:'/'
        }
    });

    gulp.watch('./index.scss',style);
    gulp.watch('./public/index.html').on('change',browserSync.reload);

};
exports.style = style;
exports.watch = watch;*/

var paths = {
  style: {
    src: "./index.scss",
    dest: "./public/css"
  }
};
function style() {
  return (
    gulp
      .src(paths.style.src)
      .pipe(sass())
      //.pipe(rename('estilos.css'))
      //.pipe(cleanCSS())
      .pipe(gulp.dest(paths.style.dest))
      .pipe(browserSync.stream())
  );
}

function watch() {
  browserSync.init({
    server: "./public"
  });
  gulp.watch(paths.style.src, style);
  gulp.watch("./public/*.html").on("change", browserSync.reload);
}
exports.style = style;
exports.watch = watch;
