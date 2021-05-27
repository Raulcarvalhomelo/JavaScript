document.querySelectorAll('a').forEach(link=>{
    const conteudo=document.getElementById('conteiner')

    link.onclick=function (e){
        e.preventDefault()
        fetch(link.href)
            .then(resp=>resp.text())
            .then(html=>conteudo.innerHTML=html)
    }  

})