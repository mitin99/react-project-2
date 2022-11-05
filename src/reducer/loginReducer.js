const reducer = (state = "", action) => {
    switch (action.type) {
        case 'login/userLogin':
            return action.payload
        case 'login/logout':
            return ''
        default:
            return state
    }
}
export default reducer;