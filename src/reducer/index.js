import {combineReducers} from 'redux'
import LoginReducer from './login/loginReducer';
import OrderReducer from './order/orderReducer';
import EditReducer from './edit/editReducer';
import VerifyReducer from './verifikasi/verifyReducer';
import ProfileReducer from './profile/profileReducer';

const CompileReducer = combineReducers({
    forLogin: LoginReducer,
    order: OrderReducer,
    edit: EditReducer,
    verify: VerifyReducer,
    profile: ProfileReducer,
})

export default CompileReducer;