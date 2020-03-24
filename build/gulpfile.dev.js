const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const config = require('./gulp.config');
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean');
const runSequence = require('run-sequence');

function dev () {
  gulp.task('html:dev', function () {
    return gulp.src(config.html.src)
      .pipe(gulp.dest(config.html.dist))
      .pipe(reload({ stream: true }));
  });
  gulp.task('css:dev', function () {
    return gulp.src(config.css.src)
      .pipe(autoprefixer('last 2 version'))
      .pipe(gulp.dest(config.css.dist))
      .pipe(gulp.dest(config.css.dist))
      .pipe(reload({ stream: true }));
  });
  gulp.task('js:dev', function () {
    return gulp.src(config.js.src)
      .pipe(gulp.dest(config.js.dist))
      .pipe(reload({ stream: true }));
  });
  gulp.task('img:dev', function () {
    return gulp.src(config.img.src)
      .pipe(gulp.dest(config.img.dist))
      .pipe(reload({ stream: true }));
  });
  gulp.task('fonts:dev', function () {
    return gulp.src(config.fonts.src)
      .pipe(gulp.dest(config.fonts.dist))
      .pipe(reload({ stream: true }));
  });
  gulp.task('other:dev', function () {
    return gulp.src(config.other.src)
      .pipe(gulp.dest(config.other.dist))
  });
  gulp.task('clean', function (cb) {
    return gulp.src(config.dist_clear)
      .pipe(clean());
  })

  gulp.task('browserSync', function () {
    browserSync.init({
      port: new Date().getFullYear(),
      server: {
        baseDir: config.dist,
        index: 'template/basic/index.html'
      },
      notify: false
    });
  });

  gulp.task('watch', ['browserSync'], function () {
    gulp.watch(config.html.src, ['html:dev']);
    gulp.watch(config.css.src, ['css:dev']);
    gulp.watch(config.js.src, ['js:dev']);
    gulp.watch(config.img.src, ['img:dev']);
    gulp.watch(config.fonts.src, ['fonts:dev']);
  });

  gulp.task('dev', function (cb) {
    runSequence(
      ['clean'],
      ['html:dev', 'css:dev', 'js:dev', 'img:dev', 'fonts:dev', 'other:dev'],
      ['browserSync', 'watch'],
      cb);
  });


}

module.exports = dev;