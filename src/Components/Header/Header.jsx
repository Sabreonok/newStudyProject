import React from 'react'
import './header.scss'
// import { BrowserRouter as Router, Navlink,Route,Routes} from "react-router-dom";
// import {Contacts, Help, Info, Results, Error404} from "../../pages"

export default function Header() {
  return (
    <header>
        <div className="container flex-wrapper">
            <div className="logo-wrapper">
              <a className="logo" href="#">FromUwithLove</a>
              <p className="slogan">We can help you</p>
            </div>
            <nav>
             <ul>
                <li><a href="#">About us</a></li>
                <li><a href="#">Our results</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">Contacts</a></li>
             </ul>
            </nav>
        </div>
    </header>
  )
}
