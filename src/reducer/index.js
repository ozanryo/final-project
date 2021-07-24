import {combineReducers} from 'redux'
import LoginReducer from './login/loginReducer';
import OrderReducer from './order/orderReducer';
import EditReducer from './edit/editReducer';
import VerifyReducer from './verifikasi/verifyReducer';

const CompileReducer = combineReducers({
    forLogin: LoginReducer,
    order: OrderReducer,
    edit: EditReducer,
    verify: VerifyReducer,
})

export default CompileReducer;