import React, { Component } from 'react';
import axios from 'axios'
import Main from '../template/Main';

const headerProps = {
  icon: 'users',
  title: 'Usuarios',
  subtitle: 'Cadastro de usuarios: Incluir, Listar, Alterar, Excluir'
}

const baseUrl = 'http://localhost:3001/users'
const inicialState = {
  user: {name: '', email: ''},
  list: []
}

export default class UserCrud extends Component {

  state = {...inicialState}

  clear() {
    this.setState({user: inicialState.user })
  }

  save() {
    const user = this.state.user
    const method = user.id ? 'put' : 'post'
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
    axios[method](url, user)
      .then(response => {
        const list = this.getUpdatedList(response.data)
        this.setState({ user: inicialState.user, list })
      })
  }

  getUpdatedList(user) {
    const list = this.state.list.filter(u => u.id !== user.id)
    list.unshift(user)
    return list 
  }

  render() {
    return (
        <Main {...headerProps}>
            Cadastro de Usuarios
        </Main>
    )
  }
}
