import React from 'react'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"

function QuestionPreview({id}) {
    const questionObj = useSelector(state => state.question[id])
    const { author, optionOne, optionTwo } = questionObj
    const authorObj = useSelector(state => state.user[author])
    const {avatarURL, name} = authorObj
    const { votes: optionOneVotes, text: optionOneText } = optionOne
    const { votes: optionTwoVotes, text: optionTwoText } = optionTwo

  return (
    <div className='questionPreview'>
      <div>{name} asks:</div>
      <img className='avatar' src={avatarURL} alt='avatar'>
      </img>
      <div>1.{optionOneText}</div>
      <div>2.{optionTwoText}</div>
      <Link to={`/questions/${id}`}><button className="button-poll">POLL</button></Link>
    </div>
  )
}

export default QuestionPreview