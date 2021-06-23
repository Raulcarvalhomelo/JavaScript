import React, {componet} from 'react'
import Main from '../template/Main'

const headrProps={
    icon:'users',
    title:'Usuarios',
    subtitle:"Cadastro de usuarios: Adicionar, Lista, Alterar e Excluir"
}
export default class UserCrud extends Componet{
    render(){
        return(
            <Main {...headrProps}>
                Cadastro de Usuario
            </Main>
        )
    }
}