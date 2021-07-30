import {combineReducers} from 'redux'

import loginReducer from './loginReducer'
import receiptReducer from './receiptReducer'
import verifReducer from './verifReducer'
import profileReducer from './profileReducer'
import updateReducer from './updateReducer'
import orderReducer from './orderReducer'

const allReducers = combineReducers({
    login: loginReducer,
    receipt: receiptReducer,
    verification: verifReducer,
    update: updateReducer,
    profile: profileReducer,
    order: orderReducer
})

export default allReducers;