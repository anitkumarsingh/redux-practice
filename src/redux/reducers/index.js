import { combineReducers } from 'redux';
import { characterReducer } from './characterReducer';
import { heroReducer } from './heroReducer';
import { setReciepeReducer } from './reciepeReducer';


const rootReducers = combineReducers({
    characters: characterReducer,
    heros: heroReducer,
    recipes: setReciepeReducer
})
export default rootReducers;