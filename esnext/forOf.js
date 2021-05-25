for(let letras of "cod"){
    console.log(letras)
}
const AssunstosMap= new Map([
    ['Map',{abordado:true}],
    ['Set',{abordado:true}],
    ['Promise',{abordado:false}]
])

for(let assunto of AssunstosMap){
    console.log(assunto)
}
for(let chaves of AssunstosMap.keys()){
    console.log(chaves)
}
for(let valores of AssunstosMap.values()){
    console.log(valores)
}
for(let [ch,vl] of AssunstosMap.entries()){
    console.log(ch,vl)
}
const s = new Set(['a',1,true])
for( let chave of s){
    console.log(chave)
}