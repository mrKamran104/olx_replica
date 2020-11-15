
const INITIAL_STATE = {
    user_name: '',
    islogin: false
}

export default (state = INITIAL_STATE, action) => {

    // console.log("user_reducer", action)

    switch (action.type) {
        case "email_login":
            console.log("dddd", state)
            // return ({
            //     ...state,
            //     user_name: action.data, islogin: true
            // })
            break;
        case "log_in":
            return ({
                ...state,
                user_name: action.data.displayName, islogin: true
            })
        case "log_out":
            return ({
                ...state,
                user_name: '', islogin: false
            })
        default:
            return state;
    }
}