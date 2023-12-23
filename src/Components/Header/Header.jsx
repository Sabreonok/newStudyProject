import React from 'react'
import './header.scss'
import { BrowserRouter as Router, NavLink ,Route,Routes} from "react-router-dom";
import {Contacts, Help, Info, Results, Error404} from "../../pages"

export default function Header() {
  return (
    <Router>
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
             </ul>
            </nav>
        </div>
    </header>
    <Routes>
      <Route path='/contacts' element={Contacts}></Route>
      <Route path='/help' element={Help}></Route>
      <Route path='/info' element={Info}></Route>
      <Route path='/results' element={Results}></Route>
      <Route path='*' element={Error404}></Route>
    </Routes>
    </Router>
  )
}
