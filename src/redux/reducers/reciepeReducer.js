import { SET_RECIEPE, ADD_FAV_RECIPES, REMOVE_FAV_RECIPES } from '../actions'

export const setReciepeReducer = (state = [], action) => {
    switch (action.type) {
        case SET_RECIEPE:
            return action.items
        default:
            return state;
    }
}
export const favRecipesReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_FAV_RECIPES:
            const favRecipes = [...state, action.recipe]
            return favRecipes;
        case REMOVE_FAV_RECIPES:
            const deleteFavRecipes = state.filter(del => del.title !== action.title)
            return deleteFavRecipes;
        default:
            return state

    }
}