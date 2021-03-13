import {ADD_CHARACTERS} from '../actions';
import {createHero} from './helperFunctions';

export const heroReducer = (state=[],action)=>{
    switch (action.type) {
        case ADD_CHARACTERS:
            const hero =[...state,createHero(action.id)]
            return hero;
            
    
        default:
            return state;
        
    }
}