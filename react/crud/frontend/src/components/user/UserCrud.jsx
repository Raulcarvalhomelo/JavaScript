import React, {Component} from 'react'
import Main from '../template/Main'
import axios from 'axios'


const headrProps={
    icon:'users',
    title:'Usuarios',
    subtitle:"Cadastro de usuarios: Adicionar, Lista, Alterar e Excluir"
}

const baseUrl='http://localhost:3001/users'
const initialState={
    user:{name:'',sobrenome:'',email:'',contato:''},
    list:[]
}


export default class UserCrud extends Component{

    state={...initialState}

    componentWillMount(){
        axios(baseUrl).then(resp=>
            this.setState({list:resp.data}))
    }

    clear(){
        this.setState({user:initialState.user})
    }

    save(){
        const user =this.state.user
        const method=user.id?'put':'post'
        const url=user.id?`${baseUrl}/${user.id}`:baseUrl
        axios[method](url,user)
            .then(resp=>{
                const list =this.getUpdateList(resp.data)
                this.setState({user:initialState.user,list})
            })
    }

    getUpdateList(user,add=true){
        const list = this.state.list.filter(u=>u.id!==user.id)
        if (add)list.unshift(user)
        return list
    }

    updateField(event){
        const user={...this.state.user}
        user[event.target.name]=event.target.value
        this.setState({user})
    }
    laod(user){
        this.setState({user})
    }
    remove(user){
        axios.delete(`${baseUrl}/${user.id}`)
            .then(resp=>{ 
                const list =this.getUpdateList(user,false)
                this.setState({list})
        })
    }
    renderTable(){
        return(
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome Completo</th>
                        <th>Email</th>
                        <th>Contato</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }
    renderRows(){
        return this.state.list.map(user=>{
            return(
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name} {user.sobrenome}</td>
                    <td>{user.email}</td>
                    <td>{user.contato}</td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={()=>this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ms-2"
                            onClick={()=>this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    renderForm(){
        return(
            <div className="form">
                <div className="col">
                    <div className="row">    
                        <div className="col mt-2 mb-2">
                            <div className="form-group">
                                <label>Nome</label><br />
                                <input type="text" className="from-control"
                                    name="name" 
                                    value={this.state.user.name} 
                                    onChange={e=>this.updateField(e)}
                                    placeholder="Digite seu nome"/>
                            </div>
                        </div>
                        
                        <div className="col mt-2 mb-2">
                            <div className="form-group">
                                <label>Sobrenome</label><br />
                                <input type="text" className="from-control"
                                    name="sobrenome" 
                                    value={this.state.user.sobrenome} 
                                    onChange={e=>this.updateField(e)}
                                    placeholder="Digite seu Sobrenome"/>
                            </div>
                        </div>
                        
                        <hr />
                        <div className="col-12 col-md-6 pt-2 mt-2 mb-2">
                            <div className="form-group">
                                <label >E-mail</label><br />
                                <input type="text" className="form-control" 
                                    name="email"
                                    value={this.state.user.email}
                                    onChange={e=>this.updateField(e)}
                                    placeholder="E-mail"/>
                            </div>
                        </div>
                     </div>   
                    <hr/>
                    <div className="col-12 col-md-6 pt-2 mt-2 mb-2">
                        <div className="from-group">
                            <label >Telefone</label><br />
                            <input type="text" className="from-control" 
                                name="contato"
                                value={this.state.user.contato}
                                onChange={e=>this.updateField(e)}
                                placeholder="Telefone para Contato"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e=>this.save(e)}>
                            Salvar
                        </button>
                        <button className="btn btn-secondary ms-2"
                            onClick={e=>this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }


    render(){
        return(
            <Main {...headrProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}