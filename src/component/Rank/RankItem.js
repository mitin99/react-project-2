import React from 'react'
import { useSelector } from 'react-redux'

function RankItem({id, rank}) {
    const user = useSelector((state) => {
        return state.user[id]
    })
    const {avatarURL, name, answers, questions} = user
    const countAnswers = Object.keys(answers).length;
    const countQuestions = questions.length
  return (
    <div className='leaderboard-row'>
        <div>{rank}</div>
        <img className='avatar' src={avatarURL} alt="avatar"></img>
        <div>
            <div>{name}</div>
            <div>Questions count: {countQuestions}</div>
            <div>Answers count: {countAnswers}</div>
        </div>
    </div>
  )
}

export default RankItem