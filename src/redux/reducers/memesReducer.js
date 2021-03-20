import { RECEIVE_MEMES, ADD_MEMES } from '../actions';

const getMemes = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_MEMES:
            return action.memes;
        default:
            return state
    }
}
const addMemes = (state = [], action) => {
    switch (action.type) {
        case ADD_MEMES:
            return [...state, action.meme]

        default:
            return state
    }
}

export { getMemes, addMemes }