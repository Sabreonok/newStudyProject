import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style/App.scss'
import Header from './Components/Header/Header'
import Aim from './Components/Aim/Aim'
import Post from './Components/Post/Post'
import score from './score.json'


function App() {
  const [arr, setArr] = useState([])
  const addPost = (userScore) => {
    {
      score.map((item, index) => {

        if (item.passingScore <= userScore) {
          setArr([...arr, { name: item.name, location: item.location, passingScore: item.passingScore, history: item.history }])
        }
      })
    }
  }
  return (
    <>
      <Header></Header>
      <div className='container'>
        <h1>Введите ваш балл:</h1>
        <Aim addPost={addPost} score={score}></Aim>
        {arr.map((item, index) => (
          <Post item={item} key={index} />
        ))}
      </div>

    </>
  )
}

export default App
