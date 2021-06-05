const {series} = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifyecss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformacaoCSS(){
    return gulp.src('src/sass/index.css')
    .pipe(sass().on('error',sass.logError))
    .pipe(uglifyecss({"uglyComments":true}))
    .pipe(concat('estilo.css'))
    .pipe(gulp.dest('build/css'))

}
exports.default=series(transformacaoCSS)