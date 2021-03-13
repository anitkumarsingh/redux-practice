import characters from '../../mock/index.json';
import {ADD_CHARACTERS} from '../actions';

export const characterReducer = (state = characters,action)=>{
    switch (action.type) {
        case ADD_CHARACTERS:
            const filterCharacters = state.filter(character =>character.id !== action.id)
            return filterCharacters;
    
        default:
            return state
            
     }
    }