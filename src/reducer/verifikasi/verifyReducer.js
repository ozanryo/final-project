const initialState = {
    verifCode: "",
    gotoVerif: false,
}

const VerifyReducer=(state=initialState, action)=>{
    switch(action.type){
        case 'GOTO_VERIF':
            return{
                verifCode: action.verifCode,
                gotoVerif: true,
            }
        case 'VERIF_DONE':
            return initialState;
        default:
            return state;
    }
}

export default VerifyReducer;