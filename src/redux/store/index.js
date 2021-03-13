import {createStore} from 'redux';
import characterReducer from '../reducers';

const store = createStore(characterReducer);

export {store}