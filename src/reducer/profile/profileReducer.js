const initialState = {
    profile: null,
}

const ProfileReducer = (state=initialState, action) => {
    switch(action.type){
        case 'RECEIVE_PROFILE':
            return{
                profile: action.profile,
            }
        default:
            return state;
    }
}

export default ProfileReducer;