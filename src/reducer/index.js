import {combineReducers} from 'redux'
import LoginReducer from './login/loginReducer';
import OrderReducer from './order/orderReducer';
import EditReducer from './edit/editReducer';
import VerifyReducer from './verifikasi/verifyReducer';
import ProfileReducer from './profile/profileReducer';
import WalletReducer from './wallet/walletReducer';
import ReceiptReducer from './receipt/receipt';

const CompileReducer = combineReducers({
    forLogin: LoginReducer,
    order: OrderReducer,
    edit: EditReducer,
    verify: VerifyReducer,
    profile: ProfileReducer,
    wallet: WalletReducer,
    transaction: ReceiptReducer,
})

export default CompileReducer;