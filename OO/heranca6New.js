function aula(nome,video){
    this.nome=nome
    this.video=video
}
const aula1= new aula('Bem Vindo',123)
const aula2= new aula('Ate breve',456)
console.log(aula1,aula2)



// Resumo de como funciona o new
// as funcoes a seguir e tudo que acontece ao 
// utilizar o new === new é um atalho para a function abaixo

function novo(f,...params){
    const obj={}
    obj.__proto__=f.prototype
    f.apply(obj,params)
    return obj
}

const aula3=novo(aula,'Bem Vindo',123)
const aula4=novo(aula,'Ate breve',456)
console.log(aula3,aula4)