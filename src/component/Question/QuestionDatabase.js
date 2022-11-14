import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {questionsIds} from '../../reducer/questionReducer'
import QuestionPreview from './QuestionPreview'

function QuestionDatabase() {
    const [unanswerQuestion, showUnanswerQuestion] = useState(true)
    const selector = (state) => {
        return state.user[state.login].answers
    }
    const userAnswer = useSelector(selector)
    const questionId = useSelector(questionsIds)

    const questionArray = questionId.filter(id => userAnswer[id] ? !unanswerQuestion : unanswerQuestion)

    .map(id => <QuestionPreview key={id} id={id}></QuestionPreview>)
  return (
   <>
    <div style={{display:"flex",direction:"row", alignItems:"center", gap:"20px"}}>
      <h2>{unanswerQuestion ? "Unanswered Questions" : "Answered Questions"}</h2>
      <button onClick={() => showUnanswerQuestion(!unanswerQuestion)}>Show {unanswerQuestion ? "answerd":"unanswered"}</button>
    </div>
    <div className="questions-list">{questionArray}</div>
   </>
  )
}

export default QuestionDatabase