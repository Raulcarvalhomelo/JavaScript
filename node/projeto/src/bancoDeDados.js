const sequence={
    _id:1000,
    get id(){return this._id++}
}

const usuarios={}

salvarfuncionarios=funcionario=>{
    if(!funcionario.id) funcionario.id=sequence.id
    usuarios[funcionario.id]=funcionario
    return funcionario
}
getFuncionario=(id)=>{return usuarios[id] ||'Usuario nao Existe'}

getUsuarios=()=>{
    return Object.values(usuarios)
}



deleteUser=(id)=>{
    const funcionario=usuarios[id]
    delete usuarios[id]
    return funcionario
}

module.exports={salvarfuncionarios, getFuncionario, getUsuarios, deleteUser}