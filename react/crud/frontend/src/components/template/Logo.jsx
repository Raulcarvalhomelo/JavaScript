import './Logo.css'
import logo from '../../assests/img/logo.svg'
import React from 'react'
import { Link } from 'react-router-dom'

export default props=>
    <aside className="logo">
        <Link to="/" className="logo">
            <img src={logo} height="90rem" alt="logo" />
        </Link>
    </aside>
