// redux-immutable+react-router-redux使用，固定写法，不可改动
import Immutable from 'immutable'
import {
    LOCATION_CHANGE
} from 'react-router-redux'

const initialState = Immutable.fromJS({
    locationBeforeTransitions: null
})

export default (state = initialState, action) => {
    if (action.type === LOCATION_CHANGE) {
        return state.merge({
            locationBeforeTransitions: action.payload
        })
    }

    return state
}
