import produce from 'immer'
import { createSelector } from 'reselect'

export default function reducer(state={}, action){
    switch (action.type){
        case 'user/userAdded':
            return action.payload

        case 'users/questionAdded': {
            const {author, id} = action.payload
            return produce(state, (newState => {
                newState[author].questions.push(id)
            })) 
        }
        case 'users/questionAnswered': {
            const {authedUser, qid, answer} = action.payload
            return produce(state, (newState => {
                newState[authedUser].answers[qid]=answer
            }))
        }
        default:
            return state
    }
}

const selector = (state) => {
    return state.user
}

export const rankboardList = createSelector([selector],
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