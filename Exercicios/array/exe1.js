console.log('---------resolucao 1---------------')
ola=nome1=>`Ola ${nome1} !`

console.log(ola('Raul'))


console.log('---------resolucao 2---------------')
function ola1 (pessoa){
    let texto = ['Ola']
    return [texto,pessoa].join(', ').concat('!')
}
console.log(ola1('John'))

console.log('---------resolucao 3---------------')
ola2=_=>"Ola,"+_+"!"

console.log(ola2('Jack'))


