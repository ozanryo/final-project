const initialState = {
    phone: '',
    metode:'',
    tagihan:'',
    status: false,
    transferCode: '',
    orderStat: false,
}

export default ReceiptBankReducer = (state=initialState, action)=>{
    switch(action.type){
        case 'RECEIVE_RECEIPT_BANK':
            return{
                phone: action.phone,
                metode: action.metode,
                tagihan: action.tagihan,
                status: action.status,
                transferCode: action.transferCode,
                orderStat: true,
            }
        case 'TRASH_RECEIPT_BANK':
            return initialState;
        default:
            return state;
    }
}