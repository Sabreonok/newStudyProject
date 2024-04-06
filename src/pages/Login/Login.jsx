import './login.scss'
import { Link, useNavigate } from 'react-router-dom'
import {Contacts, Info, Error404, Home, Login, Registr} from "./../index.js"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from 'react'



export default function Registration() {
  
  
  const navigate = useNavigate();

  function loginUser() {
    signInWithEmailAndPassword(auth,userName, password)
    const auth = getAuth;
  }
  
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="transparent" onSubmit={loginUser}>
      <div className="form-inner">
        <h3>Вход в аккаунт</h3>
        <label htmlFor="username">Имя пользователя</label>
        <input type="text" id="username" value={userName}  required autoComplete='off' onChange={(e)=>setUserName(e.target.value)}/>
        <label htmlFor="password">Пароль</label>
        <input id="password" type="password" value={password} required autoComplete='off' onChange={(e)=>setPassword(e.target.value)}/>
        <input type="checkbox" id="custom-checkbox" />
        <label htmlFor="custom-checkbox">Запомнить меня</label>
        <input type="submit" value="Войти" />
        <Link className='reglink' to="/registr" >Регистрация</Link>
      </div>
    </form>
  )
}