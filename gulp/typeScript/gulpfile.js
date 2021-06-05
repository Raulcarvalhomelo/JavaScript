const gulp=require('gulp')
const {series}=require('gulp')
const ts=require('gulp-typescript')
const uglify=require('gulp-uglify')
const concat=require('gulp-concat')
const tsProject=ts.createProject('tsconfig.json')

function transformacaoTS(){
    return tsProject.src()
    .pipe(tsProject())
    .pipe(gulp.dest('build'))

}
//mimificado
function transformacaoTSmim(){
    return tsProject.src()
    .pipe(tsProject())
    .pipe(uglify())
    .pipe(gulp.dest('buildmim'))

}
//mimificado e concatenado, ao concatenar vira um arquivo js unico
function transformacaoTSmimconcat(){
    return tsProject.src()
    .pipe(tsProject())
    .pipe(uglify())
    .pipe(concat('concat.mim.js'))
    .pipe(gulp.dest('buildconcat'))

}
exports.default=series(transformacaoTS,transformacaoTSmim,transformacaoTSmimconcat)