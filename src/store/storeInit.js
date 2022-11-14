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
        data: { optionOneText: "Can fly", optionTwoText: "Can breath under water", author:'helenfoneing'},
        successActionList: ['questions/questionAdded','users/questionAdded'],
        error: 'reject'
    }))
}
export default storeInit