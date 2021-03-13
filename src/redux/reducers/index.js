import {combineReducers} from 'redux';
import {characterReducer} from './characterReducer';
import {heroReducer} from './heroReducer';


const rootReducers = combineReducers({
    characters:characterReducer,
    heros:heroReducer
})
export default rootReducers;