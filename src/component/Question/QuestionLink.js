import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import QuestionData from './QuestionData'
import { Redirect } from "react-router";

function QuestionLink() {
    const {question_id} = useParams()
    const question = useSelector((state) => {
        return state.question
    })
    if(question[question_id]) return <QuestionData id={question_id}></QuestionData>
    else return (<Redirect to={'/404'}></Redirect>)
}

export default QuestionLink