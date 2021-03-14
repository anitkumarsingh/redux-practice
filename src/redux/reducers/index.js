import { combineReducers } from 'redux';
import { characterReducer } from './characterReducer';
import { heroReducer } from './heroReducer';
import { setReciepeReducer, favRecipesReducer } from './reciepeReducer';


const rootReducers = combineReducers({
    characters: characterReducer,
    heros: heroReducer,
    recipes: setReciepeReducer,
    favRecipes: favRecipesReducer
})
export default rootReducers;