
const INITIAL_STATE = {
    user_name: '',
    islogin: false
}

export default (state = INITIAL_STATE, action) => {

    // console.log("user_reducer", action)

    if (action.type == "log_in") {
        return ({
            ...state,
            user_name: action.data.displayName, islogin: true
        })

    }
    else if (action.type == "log_out") {
        return ({
            ...state,
            user_name: '', islogin: false
        })

    }
    return state;

}