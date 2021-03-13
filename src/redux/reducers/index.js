import characters from '../../mock/index.json';
import {ADD_CHARACTERS} from '../actions';
import {combineReducers} from 'redux';

const characterReducer = (state = characters,action)=>{
switch (action.type) {
    case ADD_CHARACTERS:
        const filterCharacters = state.filter(character =>character.id !== action.id)
        return filterCharacters;

    default:
        return state
        
 }
}
const heroReducer = (state=[],action)=>{
    switch (action.type) {
        case ADD_CHARACTERS:
            const hero =[...state,createHero(action.id)]
            return hero;
            
    
        default:
            return state;
        
    }
}

const createHero = (id)=>{
    let heros =characters.find(hero=>hero.id === id);
    return heros;
}

const rootReducers = combineReducers({
    characterReducer,
    heroReducer
})
export default rootReducers;