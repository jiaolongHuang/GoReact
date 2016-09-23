//import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutablejs'
import {reducer as formReducer} from 'redux-form'

import first from './first'
import router from './router'

const reducer = combineReducers({
    form: formReducer,
    routing: router,

    first
   
})

export default reducer