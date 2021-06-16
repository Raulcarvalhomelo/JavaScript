

function quantidadeDeLetra(frase,letra){
    var total = [...frase].filter(letraProcurada => letraProcurada === letra).length;
    console.log("total=" + total);
}
quantidadeDeLetra('uooeuoueuooquiaaa', 'quiaaa')