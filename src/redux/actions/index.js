export const ADD_CHARACTERS = "ADD_CHARACTERS";
export const REMOVE_CHARACTER = "REMOVE_CHARACTER";
export const SET_RECIEPE = "SET_RECIEPE";
export const ADD_FAV_RECIPES = "ADD_FAV_RECIPES"
export const REMOVE_FAV_RECIPES = "REMOVE_FAV_RECIPES"

export const getCharacterById = (id) => {
    const action = {
        type: ADD_CHARACTERS,
        id
    }
    return action
}

export const removeCharacterById = (id) => {
    const action = {
        type: REMOVE_CHARACTER,
        id
    }
    return action;
}

export const setReciepe = (items) => {
    const action = {
        type: SET_RECIEPE,
        items
    }
    return action
}

export const addFavRecipes = (recipe) => {
    return {
        type: ADD_FAV_RECIPES,
        recipe
    }
}

export const removeFavRecipes = (title) => {
    return {
        type: REMOVE_FAV_RECIPES,
        title
    }
}