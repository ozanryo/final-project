const initialState = {
    update: null,
    updateStat: false,
}

export default UpdateReducer = (state=initialState, action) => {
    switch(action.type){
        case 'UPDATE_START':
            return{
                update: action.update,
                updateStat: true,
            }
        case 'UPDATE_DONE':
            return initialState;
        default:
            return state;
    }
}