//tagged template = processar uma template string dentro da funcao

// function recebe um parametro que representa as partes
//vamos usar o rest com um conjunto de valores que vai ser um array
function tag(partes,...valores) {
    console.log(partes)
    console.log(valores)
    return ' Outra String'
}
const aluno='gui'
const situacao='Aprovado'

// usar uma templte string, usando as var interpoladas
console.log(tag`${aluno} esta ${situacao}` )
