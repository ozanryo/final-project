const initialState = {
    phone: '',
    metode:'',
    tagihan:'',
    status: false,
    orderStat:false,
}

export default ReceiptWalletReducer = (state=initialState, action)=>{
    switch(action.type){
        case 'RECEIVE_RECEIPT_WALLET':
            return{
                phone: action.phone,
                metode: action.metode,
                tagihan: action.tagihan,
                status: action.status,
                orderStat: true
            }
        case 'TRASH_RECEIPT_WALLET':
            return initialState;
        default:
            return state;
    }
}