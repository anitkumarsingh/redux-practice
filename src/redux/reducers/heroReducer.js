import { ADD_CHARACTERS, REMOVE_CHARACTER } from '../actions';
import { createHero } from './helperFunctions';

export const heroReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_CHARACTERS:
            const addHero = [...state, createHero(action.id)]
            return addHero;

        case REMOVE_CHARACTER:
            const removeHero = state.filter(hero => hero.id !== action.id)
            return removeHero;

        default:
            return state;

    }
}