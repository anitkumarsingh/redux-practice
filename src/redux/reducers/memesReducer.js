import { RECEIVE_MEMES } from '../actions';


const getMemes = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_MEMES:
            return action.memes;


        default:
            return state
    }
}
export { getMemes }