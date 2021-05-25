function esperarPor(tempo=2000) {
    return new Promise(function (resolve,reject) {
        setTimeout(function () {
            console.log('Executando Promise')
            resolve()            
        },tempo)
    })
}
esperarPor()
    .then(()=>esperarPor())
    .then(()=>esperarPor(5000))
    .then(a=>console.log('Promise Executada com sucesso'))
    .then(a=>console.log('Fim!!'))


// setTimeout(function () {
//     console.log('Executando CallBack')
//     setTimeout(function(){
//         console.log('Executando CallBack 2')
//         setTimeout(function (){
//             console.log('Executando CallBack 3')            
//         },2000)
//     },2000)    
// },2000)