// Usando a notacao literal
const obj1={}
console.log(obj1)


// Object in JS
const Carro = new Object
console.log(Carro)


// Funcoes Contstruturas
function Produto(nome,preco,desconto){
    this.nome=nome
    this.getPrecComDesconto=()=>{  
        return preco*(1-desconto)
    }
}
const p1 = new Produto ('notebook',10,0.20)
const p2 = new Produto ('caneta',10,0.10)
console.log(p1.getPrecComDesconto(),p2.getPrecComDesconto())

// funcao Factory
function criarFuncionario(nome,salario,faltas){
    return{
        nome,
        salario,
        faltas,
        getSalario(){
            return(salario/30)*(30-faltas)
        }
    }
}
const f1 = criarFuncionario('jao',1600,2)
const f2 = criarFuncionario('maria',1500,3)
console.log(f1.getSalario(), f2.getSalario())


// object.create
const filha = Object.create(null)
filha.nome='Ana'
filha.idade=27
filha.profissao='PUTA'

console.log(filha)

// json.parse = JSON e string
const fromJSON=JSON.parse('{"info": "sou um JSON"}')
console.log(fromJSON.info)

