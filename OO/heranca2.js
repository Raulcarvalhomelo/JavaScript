// cadeia de prototipos

Object.prototype.attr0='0'// nao ultilizar esse exemplo

const avo={attr1:'a'} // AVo > pai > filho
const pai={__proto__:avo, attr2:'b',attr3:'3'}
const filho={__proto__:pai,attr3:'c'}
console.log(filho.attr0,filho.attr1,filho.attr2,filho.attr3)


const carro={
    velAtual:0,
    velMax:200,
    acelerarMais(delta){
        if (this.velAtual+delta<=this.velMax) {
            this.velAtual+=delta
        }else{
            this.velAtual=this.velMax
        }
    },
    status(){
        return`${this.velAtual} km/h de ${this.velMax} Km/h`
    }
}
const ferrari={
    modelo:'F40',
    velMax:324 // shadowing
}
const volvo={
    modelo:'V40',
    status(){
        return`${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari,carro)
Object.setPrototypeOf(volvo,carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(300)
console.log(volvo.status())
ferrari.acelerarMais(300)
console.log(ferrari.status())