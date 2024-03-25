import './registr.scss'
import { Link } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from 'react'
import {Contacts, Info, Error404, Home, Login} from "./../index.js"
import { useNavigate } from 'react-router-dom';




const auth = getAuth();
const navigate = useNavigate()


function validPass(){
    return copyPassword === password
}


async function createUser(event){
    event.preventDefault()
    if(!validPass()) {
        setErrCopyPass(true) 
        return;
    }

    setErrCopyPass(false);
    createUserWithEmailAndPassword(auth,email,password).then(
        (currentUser) => {
            navigate('/')
        }
        )
}





export default function Registr() {



  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [copyPassword, setCopyPassword] = useState("");
  const [errCopyPass, setErrCopyPass] = useState(false);



  return (
    <form className="transparent" onSubmit={createUser}>
    <div className="form-inner">
      <h3>Регистрация</h3>
      <label htmlFor="username">Имя пользователя</label>
      <input type="text" id="username" value={userName} required autoComplete='off' onChange={()=>setUserName(e.target.value)}/>
      <label htmlFor="email">Электронная почта</label>
      <input type="text" id="email" value={email} required autoComplete='off' onChange={()=>setEmail(e.target.value)}/>
      <label htmlFor="password">Пароль</label>
      <input id="password" type="password" value={password} required autoComplete='off' onChange={()=>setPassword(e.target.value)}/>
      {errCopyPass && <h4 className='errText'>Пароли не совпадают</h4>}
      <label htmlFor="copyPassword">Повторите пароль</label>
      <input id="password" type="password" value={copyPassword} required autoComplete='off' onChange={()=>setCopyPassword(e.target.value)}/>
      <input type="submit" value="Войти" />
      <Link className='reglink' to="/login" >Авторизация</Link>
    </div>
  </form>
  )
}
