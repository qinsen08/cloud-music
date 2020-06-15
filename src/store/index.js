/*
 * @Author: qinsensen
 * @Date: 2020-06-15 18:53:26
 * @LastEditors: qinsensen
 * @LastEditTime: 2020-06-15 19:03:05
 * @Description: 
 */ 
import { createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore (reducer, composeEnhancers (
  applyMiddleware (thunk)
));
export default store