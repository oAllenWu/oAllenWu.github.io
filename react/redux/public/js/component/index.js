import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import App from '../container/app';
import todoApp from '../reducers/index';

/*
 *创建store
 */
const store = createStore(todoApp,{appItem:[]});

/*
 * 通过provider让顶层组件能取到store
 */
render(
	<Provider store={store}>
	    <App />
	</Provider>,
	document.getElementById("app")
)

