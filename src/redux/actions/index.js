import { IMG_FLIP_URL } from '../../constant/api';


export const ADD_CHARACTERS = "ADD_CHARACTERS";
export const REMOVE_CHARACTER = "REMOVE_CHARACTER";
export const SET_RECIEPE = "SET_RECIEPE";
export const ADD_FAV_RECIPES = "ADD_FAV_RECIPES";
export const REMOVE_FAV_RECIPES = "REMOVE_FAV_RECIPES";
export const RECEIVE_MEMES = "RECEIVE_MEMES";
export const ADD_MEMES = "ADD_MEMES";

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

export const addMemes = (meme) => {
    return {
        type: ADD_MEMES,
        meme
    }
}

const receiveMemes = (json) => {
    const { memes } = json.data
    return {
        type: RECEIVE_MEMES,
        memes
    }
}

const fetchMemesJson = () => {
    return fetch(`${IMG_FLIP_URL}/get_memes`).then(response => response.json())
}
export const fetchMemes = () => {
    return function (dispatch) {
        return fetchMemesJson()
            .then(result => dispatch(receiveMemes(result)))
    }
}