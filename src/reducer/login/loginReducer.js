const initialState = {
    profile: null,
    status: false,
}

const LoginReducer=(state=initialState, action)=>{
    switch(action.type){
        case 'LOGIN_DONE':
            return{
                profile: action.profile,
                status: true,
            }
        case 'LOGOUT':
            return initialState;
        default:
            return state;
    }
}

export default LoginReducer;