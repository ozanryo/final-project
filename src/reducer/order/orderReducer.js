const initialState = {
    order : null,
}

const OrderReducer = (state=initialState, action)=>{
    switch(action.type){
        case 'ORDER_TAKEN':
            return{
                order: action.order,
            }
        default:
            return state;
    }
}
export default OrderReducer;