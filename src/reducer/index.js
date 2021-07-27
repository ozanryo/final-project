import {combineReducers} from 'redux'

import loginReducer from './loginReducer'
import receiptReducer from './receiptReducer'
import verifReducer from './verifReducer'

const allReducers = combineReducers({
    login: loginReducer,
    receipt: receiptReducer,
    verification: verifReducer,
})

export default allReducers;