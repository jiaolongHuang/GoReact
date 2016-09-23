import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import Reducer from '../reducers/index'
import thunkMiddleware from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'

export function configureStore(initialState, history) {
	const store = createStore(
	  Reducer,
	  initialState,
	  compose(
	    applyMiddleware(
	      thunkMiddleware,
	      routerMiddleware(history)
	    ),
	    window.devToolsExtension ? window.devToolsExtension() : f => f
	  )
	)

	return store

}