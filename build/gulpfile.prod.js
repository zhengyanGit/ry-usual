const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const cssnano = require('gulp-cssnano');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const config = require('./gulp.config');
const configSend = require('./gulpfile.config');
const uglify = require('gulp-uglify');
//const ftp = require('gulp-ftp');
const gutil = require('gulp-util');
const babel = require('gulp-babel');
const clean = require('gulp-clean');



function prod () {
  gulp.task('html', function () {
    return gulp.src(config.html.src)
      .pipe(htmlmin(configSend.htmlmin))
      .pipe(gulp.dest(config.html.dist));
  });
  gulp.task('css', function () {
    return gulp.src(config.css.src)
      .pipe(autoprefixer('last 2 version'))
      .pipe(gulp.dest(config.css.dist))
      .pipe(cssnano())
      .pipe(gulp.dest(config.css.dist))
  });
  gulp.task('img', function () {
    return gulp.src(config.img.src)
      .pipe(cache(imagemin(configSend.img)))
      .pipe(gulp.dest(config.img.dist))
  });
  gulp.task('baseJs', function () {
    return gulp.src(config.baseJs.src)
      .pipe(gulp.dest(config.baseJs.dist))
  });
  gulp.task('frontPageJs', function () {
    return gulp.src(config.frontPageJs.src)
      .pipe(babel({
        presets: ['es2015'] // es5检查机制
      }))
      .pipe(uglify())
      .on('error', function (err) {
        gutil.log(gutil.colors.red('[Error]'), err.toString());
      })
      .pipe(gulp.dest(config.frontPageJs.dist))
  });
  gulp.task('templateJs', function () {
    return gulp.src(config.templateJs.src)
      .pipe(babel({
        presets: ['es2015'] // es5检查机制
      }))
      .pipe(uglify())
      .on('error', function (err) {
        gutil.log(gutil.colors.red('[Error]'), err.toString());
      })
      .pipe(gulp.dest(config.templateJs.dist))
  });

  gulp.task('fonts', function () {
    return gulp.src(config.fonts.src)
      .pipe(gulp.dest(config.fonts.dist))
  });
  gulp.task('other', function () {
    return gulp.src(config.other.src)
      .pipe(gulp.dest(config.other.dist))
  });
  gulp.task('clean', function (cb) {
    return gulp.src(config.dist_clear)
      .pipe(clean());
  })
  gulp.task('build', ['clean'], function () {
    gulp.start('html', 'css', 'img', 'baseJs', 'fonts', 'other', 'frontPageJs', 'templateJs')
  });
}
module.exports = prod;
