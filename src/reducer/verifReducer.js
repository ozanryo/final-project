const initialState = {
    verifCode: '',
    verifStat: false,
}

export default VerificationReducer = (state=initialState, action) =>{
    switch(action.type){
        case 'GET_VERIFCODE':
            return{verifCode: action.verifCode, verifStat: true}
        case 'VERIF_DONE':
            return initialState;
        default:
            return state;
    }
}

