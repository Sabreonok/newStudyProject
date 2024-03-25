import React from 'react'
import './header.scss'
import { BrowserRouter as Router, NavLink ,Route,Routes} from "react-router-dom";
import {Contacts, Info, Error404, Home, Login} from "../../pages"

export default function Header() {
  return (
   
    <header>
        <div className="container flex-wrapper">
            <div className="logo-wrapper">
              <NavLink to="/" className="logo">FromUwithLove</NavLink>
              <p className="slogan">We can help you</p>
            </div>
            <nav>
             <ul>
                <li><NavLink to="/info">About us</NavLink></li>
                <li><NavLink to="/results">Our results</NavLink></li>
                <li><NavLink to="/help">Help</NavLink></li>
                <li><NavLink to="/contacts">Contacts</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
             </ul>
            </nav>
        </div>
    </header>
    
    
  )
}
