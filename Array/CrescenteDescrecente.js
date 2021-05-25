// funcao.sort() == .sort e usado para lista os elemento da array em forma crescente.
// para usar o .sort de forma DECRESCENTE e necessario criar uma arrow ou function com parametros e if
// ex:        ((a,b)=>{if (a>b)return -1;if(a<b)return 1}

const notas=[7.7,6.5,9.2,4.2,8.1,2.2,1.0]
for(let i in notas){
    if(notas[i]<7){
        notasBaixa.push(notas[i])
        notasBaixa.sort((a,b) => a < b ? 1 : -1)
    }else if(notas[i]>=7){
        notasAuta.push(notas[i])
        notasAuta.sort((a,b)=>{if (a>b)return -1;if(a<b)return 1})
       
    }
}
console.log (notasBaixa)
console.log (notasAuta)


