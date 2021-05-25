//Json é um formato de Dados( formato textual)

// Passar obj para formato JSON
const obj={a:1,b:2,c:3, soma(){return a+c+b}}
console.log(JSON.stringify(obj))

// Passar JSON para formato Obj ,Atributo delimitado por 
// aspas simples, chaves e aspas duplas => '{""}'
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))
console.log(JSON.parse('{"a":1.7, "b":"String", "c":true, "d":{}, "e":[]}'))
