import { _getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer } from '../backend/_DATA'

const backendApi = {
    _getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer
}

const api = store => next => async action => {
    if (action.type !== 'api/init') return next(action)
    next(action)
    const { dispatch } = store
    const {method, data, error} = action.payload; let successActionList = action.payload
    if (typeof (successActionList) === 'string') successActionList=[successActionList]

    try {
        const res = await backendApi[method](data)
        successActionList.array.forEach(element => {
            dispatch({type:element, payload: res})
        });
    } catch(err) {
        dispatch({type:error,payload:err})
        console.log('error:',err)
    }
}
export default api