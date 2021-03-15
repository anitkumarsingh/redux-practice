import { createStore, applyMiddleware } from 'redux';
import characterReducer from '../reducers';
import thunk from 'redux-thunk'

const store = createStore(characterReducer, applyMiddleware(thunk));

export { store }