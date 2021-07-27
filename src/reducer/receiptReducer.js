const initialState = {
    receipt: null,
}

export default receiptReducer = (state=initialState, action)=>{
    switch(action.type){
        case 'RECEIPT_GET':
            return{
                receipt: action.receipt,
            }
        case 'RECEIPT_ERASED':
            return initialState;
        default: 
            return state;
    }
}

