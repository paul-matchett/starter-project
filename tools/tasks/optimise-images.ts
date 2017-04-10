/******************************************************************

  TASK - optimise-images
  Optimising all jpg, gif and png images files

  Packages:

  1.  Optimising images
      gulp-newer        - https://www.npmjs.com/package/gulp-newer
      gulp-imagemin     - https://www.npmjs.com/package/gulp-imagemin

  2.  Browsersync for localhost server
      browser-sync      - https://www.npmjs.com/package/browser-sync

*******************************************************************/

// import Gulp library
import { task, src, dest } from 'gulp';

// Project Settings
import { ImageConfig, IMAGE_OPTIMIZATION_OPTIONS } from '../constants';

// NPM Dev Dependencies

// Optimising images
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');

// Browsersync for localhost server
const browserSync = require('browser-sync');

/*
  Task 5
  Optimising all images
*/
task('optimise-images', () => {
  return src(ImageConfig.start)
  .pipe(newer(ImageConfig.start))
  .pipe(imagemin(IMAGE_OPTIMIZATION_OPTIONS))
  .pipe(dest(ImageConfig.end))
  .pipe(browserSync.stream());
});