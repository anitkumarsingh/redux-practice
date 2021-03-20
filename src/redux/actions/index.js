import { IMG_FLIP_URL } from '../../constant/api';
import { imgFlip } from '../../config';

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

const addMemes = (meme) => {
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
const postMemesJson = (params) => {
    params["username"] = imgFlip.USER_NAME;
    params["password"] = imgFlip.PASSWORD;

    const bodyParams = Object.keys(params).map(key => {
        return encodeURIComponent(key) + "=" + encodeURIComponent(params[key])
    }).join("&")

    console.log('as', bodyParams)
    return fetch(`${IMG_FLIP_URL}/caption_image`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: bodyParams
    }).then(response => response.json());
}

export const createdMemes = (new_object_params) => {
    console.log('final', new_object_params)
    return function (dispatch) {
        return postMemesJson(new_object_params)
            .then(result => dispatch(addMemes(result)))
    }
}