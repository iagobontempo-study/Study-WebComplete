import './Main.css'
import React from 'react'
import Header from './Header'

export default props =>
    <React.Fragment>
        <Header {...props} /> {/*Propriedades recebidas no main estão sendo propagadas no header*/}
        <main className="content">
            Content
        </main>
    </React.Fragment>