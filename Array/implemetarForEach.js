Array.prototype.forEach2=function(callback){
    for(let i=0;i <this.length;i++)
    callback(this[i],i,this)
}


const percorrer3= ['a','b','c']

percorrer3.forEach2(function(nome,indice,arry){console.log(`${indice+1} - ${nome}`)});

