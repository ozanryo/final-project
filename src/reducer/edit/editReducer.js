const initialState = {
    profile: null,
    status: false,
}

const EditReducer=(state=initialState, action)=>{
    switch(action.type){
        case 'EDIT_BEGIN':
            return{
                profile: action.profile,
                status: true,
            }
        case 'EDIT_DONE':
            return{
                profile: action.profile,
                status: false,
            }
        case 'EDIT_CANCEL':
            return{
                ...state,
                status: false,
            }
        default:
            return state;
    }
}

export default EditReducer;