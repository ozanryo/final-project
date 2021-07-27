const initialState = {
    profile: null,
    loginStat: false,
}

export default loginReducer = (state=initialState, action)=>{
    switch(action.type){
        case 'LOGIN':
            return{
                profile: action.profile,
                loginStat: true,
            }
        case 'LOGOUT':
            return initialState;
        default:
            return state;
    }
}
