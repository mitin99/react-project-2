const reducer = (state=false, action) =>{
    switch (action.type) {
        case 'form/formSubmitted':{
            return true
        }
        case 'form/formReset':{
            return false
        }
        default:
            return state
    }
}
export default reducer