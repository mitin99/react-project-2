import produce from 'immer'
import { createSelector } from 'reselect'

export default function reducer(state={}, action){
    switch (action.type){
        case 'user/userAdded':
            return action.payload

        case 'user/questionAdded': {
            const {author, id} = action.payload
            return produce(state, (newState => {
                newState[author].questions.push(id)
            })) 
        }
        case 'user/answerd': {
            const {user, questionId, answer} = action.payload
            return produce(state, (newState => {
                newState[user].answers[questionId]=answer
            }))
        }
        default:
            return state
    }
}

const selector = (state) => {
    return state.user
}

export const leaderboardList = createSelector([selector],
    (user) => {
        const userList = Object.values(user)
        const sortScore = userList.sort((a,b) => {
            const score = (i) => {
                return Object.keys(i.answers).length + i.questions.length
            }
            return score(b) - score(a)
        })
        const sortById = sortScore.map(user => user.id)
        return sortById
    })