import store from './store'
import { apiInit } from './apiInit'

const storeInit = () => {
    store.dispatch(apiInit({
        method: '_getUsers',
        data: {},
        successActionList: 'user/userAdded',
        error: 'reject'
    }))
    store.dispatch(apiInit({
        method: '_getQuestions',
        data: {},
        successActionList: 'question/questionsReceived',
        error: 'reject'
    }))
    store.dispatch(apiInit({
        method: '_saveQuestion',
        data: { optionOneText: "I believe in fate", optionTwoText: "I dont believe in fate", author:'helenfoneing'},
        successActionList: ['question/questionAdded','user/questionAdded'],
        error: 'reject'
    }))
}
export default storeInit