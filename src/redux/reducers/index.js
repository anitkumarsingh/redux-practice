import { combineReducers } from 'redux';
import { characterReducer } from './characterReducer';
import { heroReducer } from './heroReducer';
import { setReciepeReducer, favRecipesReducer } from './reciepeReducer';
import { getMemes, addMemes } from './memesReducer';


const rootReducers = combineReducers({
    characters: characterReducer,
    heros: heroReducer,
    recipes: setReciepeReducer,
    favRecipes: favRecipesReducer,
    memes: getMemes,
    myMemes: addMemes
})
export default rootReducers;