import React from 'react'
import QuestionItem from "./QuestionItem"
import { useSelector } from 'react-redux'
import Poll from './Poll'

function QuestionData({id}) {
    const questionState = (state) => {
        const isAnswered = state.user[state.login].answers[id] !== undefined ? true : false
        return isAnswered
    }
    const isQuestionAnswered = useSelector(questionState)
    const questionObj = useSelector(state => state.question[id])

    const {optionOne, optionTwo, author} = questionObj
    const authorObj = useSelector(state => state.user[author])
    const option = useSelector(state => state.user[state.login].answers[id])

    const { avatarURL, name } = authorObj
    const { votes: optionOneVotes, text: optionOneText } = optionOne
    const { votes: optionTwoVotes, text: optionTwoText } = optionTwo
    const optionOneVotesCount = optionOneVotes.length
    const optionTwoVotesCount = optionTwoVotes.length

    const props = {optionOneText, optionTwoText, optionOneVotesCount, optionTwoVotesCount, avatarURL, option, name, id, author}
  return isQuestionAnswered ? <QuestionItem {...props}></QuestionItem> : <Poll {...props}></Poll>
}

export default QuestionData