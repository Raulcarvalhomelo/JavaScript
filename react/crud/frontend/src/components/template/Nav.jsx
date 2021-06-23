import './Nav.css'
import React from 'react'
import NavItens from './NavItens'

export default props=>
   <aside className="menu-area">
        <nav className="menu">
            <NavItens   page="/" icon="home" title="Home"/>
            <NavItens   page="users" icon="users" title="Usuarios"/>
        </nav>
    </aside>
