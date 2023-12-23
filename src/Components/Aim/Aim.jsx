import React, { useState } from 'react'
import './aim.scss'

export default function Aim(props) {
    const [userScore, setUserScore] = useState(0)
    return (
        <div className='container'>


            <form>
                <input type="text" value={userScore} onChange={(e) => setUserScore(e.target.value)} />
                <button type='button' onClick={() => {
                    for (let i = 0; props.score.length > i; i++) {
                        props.addPost(userScore)
                    }
                    setUserScore(0)
                }} > Отправить</button>

            </form >
        </div>

    )
}

