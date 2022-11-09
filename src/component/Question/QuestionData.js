import React from 'react'
import QuestionItem from "./QuestionItem"
import { useSelector } from 'react-redux'

function QuestionData({questionId}) {
    const questionState = (state) => {
        const isAnswered = state.users[state.login].answers[questionId] !== undefined ? true : false
        return isAnswered
    }
    const questionSelector = useSelector(questionState)
    const questionObj = useSelector(state => state.questions[questionId])

    const {optionOne, optionTwo, author} = questionObj
    const authorObj = useSelector(state => state.users[author])
    const option = useSelector(state => state.users[state.login].answers[questionId])

    const { avatarURL, name } = authorObj
    const { votes: optionOneVotes, text: optionOneText } = optionOne
    const { votes: optionTwoVotes, text: optionTwoText } = optionTwo
    const optionOneVotesCount = optionOneVotes.length
    const optionTwoVotesCount = optionTwoVotes.length

    const props = {optionOneText, optionTwoText, optionOneVotesCount, optionTwoVotesCount, avatarURL, option, name}
  return questionSelector ? <QuestionItem {...props}></QuestionItem> : ""
}

export default QuestionData