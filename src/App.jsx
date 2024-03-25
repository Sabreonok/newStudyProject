import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style/App.scss'
import Header from './Components/Header/Header'
import Aim from './Components/Aim/Aim'
import Post from './Components/Post/Post'
import score from './score.json'
import { BrowserRouter as Router, NavLink ,Route,Routes} from "react-router-dom";
import {Contacts, Info, Error404, Home, Login, Registr} from "./pages"


function App() {
  const [arr, setArr] = useState([])
  const addPost = (userScore) => {

    const filterScore = score.filter((item, index) => {
      if (item.passingScore <= userScore) {
        return true
      }
      return false
    }

    )

    setArr(filterScore)

  }
  return (
    <>
      <Router>
        <Header></Header>
        <main>
          <Routes>
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/info' element={<Info />} />
            <Route path='/results' element={<Results />} />
            <Route path='/' element={<Home arr={arr} addPost={addPost} score={score}/>} />
            <Route path='/login' element={<Login />} />
            <Route path='/registr' element={<Registr />} />
            <Route path='*' element={<Error404 />} />
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
