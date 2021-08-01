const initialState = {
    wallet: "",
}

const WalletReducer = (state =initialState, action)=>{
    switch(action.type){
        case 'GET_WALLET':
            return{
                wallet: action.wallet,
            }
        default:
            return state;
        
    }
}

export default WalletReducer;