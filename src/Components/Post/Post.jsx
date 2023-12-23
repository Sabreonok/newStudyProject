import React from 'react'
import './post.scss'

export default function Post(props) {
  return (
    <div className='container'>
      
        <div className='post'>
          <h1 className='UnName'>{`Название: ${props.item.name}`}</h1>
          <div className='card_title'>
            <h2>{`Место: ${props.item.location}`}</h2>
            <h2>{`Проходной балл: ${props.item.passingScore}`}</h2>
            <h2>{`История: ${props.item.history}`}</h2>
          </div>

        </div>

      </div>
    

  )
}