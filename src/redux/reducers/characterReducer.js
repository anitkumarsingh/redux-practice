import characters from '../../mock/index.json';
import {ADD_CHARACTERS,REMOVE_CHARACTER} from '../actions';
import {createHero} from './helperFunctions';

export const characterReducer = (state = characters,action)=>{
    switch (action.type) {
        case ADD_CHARACTERS:
             const filterCharacters = state.filter(character =>character.id !== action.id)
             return filterCharacters;
        case REMOVE_CHARACTER:
             const removeCharacter = [...state,createHero(action.id)]
             return removeCharacter;
        default:
            return state
            
     }
    }