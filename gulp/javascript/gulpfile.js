const gulp=require('gulp')
const{series}=require('gulp')
const concat=require('gulp-concat')
const uglify=require('gulp-uglify')
const babel=require('gulp-babel')

function padrao(cb){
    return gulp.src('src/*')
                .pipe(babel({
                    comments:false,//retira os comentarios
                    presets:["env"]//versao do js
                }))
                .pipe(uglify())//mimifica o codigo(retira espacos)
                .pipe(concat('Codigo.min.js'))//concat o codigo em um linha
                .pipe(gulp.dest('build'))//destino
}
exports.default=series(padrao)