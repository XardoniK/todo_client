import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import store from './redux/store';
// import {GraphQLClient, ClientContext} from "graphql-hooks";
// import memCache from 'graphql-hooks-memcache';
import 'bootstrap/dist/css/bootstrap.min.css';

// const clientGraphQLHooks = new GraphQLClient({
// 	url: 'http://localhost:4000/graphql',
// 	cache: memCache()
// });

ReactDOM.render(
	(
		<Provider store={store}>
			{/*<ClientContext.Provider value={clientGraphQLHooks}>*/}
				<TodoApp/>
			{/*</ClientContext.Provider>*/}
		</Provider>
	),
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
