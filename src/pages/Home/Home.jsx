import React from 'react'
import { useState } from 'react'

import Header from '../../Components/Header/Header'
import Aim from '../../Components/Aim/Aim'
import Post from '../../Components/Post/Post'
import score from '../../score.json'
import './home.scss'


export default function Home(props) {


  

  return (
    <div>
      <div className='home_container'>
        <div className=''>
          <div className='site_function'>
            <h1>Введите ваш балл:</h1>
            <Aim addPost={props.addPost} score={props.score}></Aim>
            {props.arr.map((item, index) => (
              <Post item={item} key={index} />
            ))}
           
            <p>Поздравляем вас!</p>
          </div>
        </div>
      </div>
    </div>


  )
}
