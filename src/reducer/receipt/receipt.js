const initialState = {
    receipt: null,
    transactionStat: false,
}

const ReceiptReducer = (state=initialState, action) => {
    switch(action.type){
        case 'GET_TRANSACTION':
            return{
                receipt: action.receipt,
                transactionStat: true
            }
        case 'TRANSACTION_TRASH':
            return initialState;
        default:
            return state;
    }
}

export default ReceiptReducer;