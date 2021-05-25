const t= process.argv.indexOf('-a')!==-1

if(t){
    process.stdout.write('Fala Anonimo!\n') // \n =quebra de linha.
    process.exit()
}else{
    process.stdout.write('informe o seu nome: ')
    process.stdin.on('data',data=>{
        const nome =data.toString().replace('\n','')

        process.stdout.write(` Fala ${nome}!!\n`)
        process.exit()
    })
}