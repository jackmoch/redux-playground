import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import App from './containers/App'

const loggerMiddleware = createLogger()

const store = createStore(
	applyMiddleware(
		thunkMiddleware,
		loggerMiddleware	
	)
)

const app = document.getElementById('entry')

render(
	<Provider store={store}>
		<App />
	</Provider>,
	app
)