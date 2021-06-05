const gulp = require('gulp')
const {parallel} = require('gulp')
const series=gulp.series


const inicio=cb=>{
    console.log('inicio ok')
    return cb()
}

const inicio1=cb=>{
    console.log('inicio ok')
    return cb()
}

function copiar(cb){
    gulp.src(['pastaA/arquivo1.txt','pastaA/arquivo2.txt'])
        .pipe(gulp.dest('pastaB'))
    return cb()
}
function backup(cb){
    gulp.src('pastaA/teste/*')
        .pipe(gulp.dest('pastaC'))
    return cb()
}
const fim=cb=>{
    console.log('fim ok')
    return cb()
}
this.default=series(
    parallel(inicio,inicio1),
    copiar,
    backup,
    fim,
)