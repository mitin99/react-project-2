/* eslint-disable no-unused-vars */
import produce from 'immer'
import { createSelector } from 'reselect'

export default function reducer(state = {}, action) {
    switch (action.type) {
        case 'question/questionsReceived': {
            return action.payload
        }
        case 'question/questionAdded': {
            return produce(state, (newState) => {
                newState[action.payload.id] = action.payload
            })
        }
        case 'question/questionAnswered':{
            const {user, questionId, answer } = action.payload
            return produce(state, (newState) => {
                newState[questionId][answer].votes.push(user)
            })
        }
        default:
            return state
    }
}

const selector = (state) => {
    return state.questions
}
export const questionsIds = createSelector([selector],
    (questions) => {
        const idList = Object.keys(questions)
        const sortByTime = idList.sort((a,b) => questions[b].timestamp - questions[a].timestamp)
        return sortByTime
    }

)


// export const isQuestionAnswered = createSelector()