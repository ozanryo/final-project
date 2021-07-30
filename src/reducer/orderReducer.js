const initialState = {
    receipt: null,
    orderState: false,
    phone:'',
    product: null,
    message:'',
}

export default OrderReducer = (state=initialState, action) => {
    switch(action.type){
        case'GET_ORDER':
            return{
                ...state,
                phone: action.phone,
                product:action.product,
            }
        case 'ORDER_DONE':
            return{
                ...state,
                receipt: action.receipt,
                orderState: true,
                message: action.message,
            }
        case 'RECEIPT_TRASH':
            return initialState;
        default: 
            return state;
    }
}