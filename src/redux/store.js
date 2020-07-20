import {applyMiddleware, createStore} from "redux";
import combined_reducers from './combined_reducers';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(combined_reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
