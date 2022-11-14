const reducer = (state=false, action) =>{
    switch (action.type) {
        case 'form/formSubmitted':{
            return true
        }
        case 'form/reset':{
            return false
        }
        default:
            return state
    }
}
export default reducer