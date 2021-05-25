function Carro(velocidadeMaxima=200, Delta=5){
    // atributo privado
    let velocidadeAtual=0

    // metodo publico. deve ser usado o this
    this.acelerar=function(){
        if(velocidadeAtual+Delta <= velocidadeMaxima){
            velocidadeAtual+=Delta
        }else{
            velocidadeAtual=velocidadeMaxima
        }
    }

    // metodo Publico
    this.getvelocidadeAtual=function(){
        return velocidadeAtual
    }
}


const uno =new Carro
uno.acelerar()
console.log(uno.getvelocidadeAtual())
const ferrari = new Carro(350, 10)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getvelocidadeAtual())