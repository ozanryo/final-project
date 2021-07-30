const initialState = {
    profile: null,
}

export default ProfileReducer = (state=initialState, action) => {
    switch(action.type){
        case 'GET_PROFILE':
            return{profile: action.profile}
        case 'PROFILE_RELEASE':
            return initialState;
        default:
            return state;
    }
}