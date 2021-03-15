import { combineReducers } from 'redux';
import { characterReducer } from './characterReducer';
import { heroReducer } from './heroReducer';
import { setReciepeReducer, favRecipesReducer } from './reciepeReducer';
import { getMemes } from './memesReducer';


const rootReducers = combineReducers({
    characters: characterReducer,
    heros: heroReducer,
    recipes: setReciepeReducer,
    favRecipes: favRecipesReducer,
    memes: getMemes
})
export default rootReducers;