const notas=[7.7,6.5,9.2,4.2,8.1,2.2,1.0]


// Com Callback é so usar o .filter

const notasBaixa1= notas.filter(nota=>nota<7)
const notasAuta1= notas.filter(nota=>nota>=7)

console.log(notasBaixa1)
console.log(notasAuta1)



// sem callback
const notasBaixa3=[]
const notasAuta3=[]
for(let i in notas){
    if(notas[i]<7){
        notasBaixa3.push(notas[i])
    }else if(notas[i]>=7){
        notasAuta3.push(notas[i])
        notasAuta3.sort((a,b)=>{if (a>b)return -1;if(a<b)return 1})
    }
}
console.log (notasBaixa3)
console.log (notasAuta3)

// Com Callback
