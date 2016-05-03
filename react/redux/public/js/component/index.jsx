import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import App from './app';
import todoApp from '../reducers/index';

/*
 *创建store
 */
const store = createStore(todoApp,{appItem:[]});
render(
	<Provider store={store}>
	    <App />
	</Provider>,
	document.getElementById("app")
)

