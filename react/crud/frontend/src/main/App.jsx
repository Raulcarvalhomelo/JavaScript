import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react'
import './App.css'

import Nav from '../components/template/Nav'
import Logo from '../components/template/Logo'
import Routes from './Routes'
import Footer from '../components/template/Footer'
export default props=>
    <div className="app">
        <Logo/>
        <Nav/>
        <Routes>
        <Footer/>
    </div>