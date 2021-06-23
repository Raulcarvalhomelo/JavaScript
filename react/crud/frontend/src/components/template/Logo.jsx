import './Logo.css'
import logo from '../../assests/img/logo.svg'
import React from 'react'

export default props=>
    <aside className="logo">
        <a href="/" className="logo">
            <img src={logo} height="90rem" alt="logo" />
        </a>
    </aside>
