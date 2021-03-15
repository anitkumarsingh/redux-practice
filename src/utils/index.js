import { BASE_URL, IMG_FLIP } from '../constant/api';

const makeHttpRequest = async (url, method, payload) => {
    try {
        const { ingredient, receipe } = payload;
        const constructUrl = `${BASE_URL}/${url}?i=${ingredient}&q=${receipe}`
        const res = await fetch(constructUrl, {
            method
        })
        const result = await res.json()
        const { results } = result
        return { results }
    } catch (error) {

    }
}
const fetchImgFlipMemes = async (url, method) => {
    try {
        const res = await fetch(`${IMG_FLIP}/${url}`, {
            method
        })
        const { memes } = res.data;
        console.log('fun', res)
        return { memes }
    } catch (error) {

    }
}
export {
    makeHttpRequest,
    fetchImgFlipMemes
}