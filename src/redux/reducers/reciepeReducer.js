import { SET_RECIEPE } from '../actions'

export const setReciepeReducer = (state = [], action) => {
    switch (action.type) {
        case SET_RECIEPE:
            return action.items
        default:
            return state;
    }
}