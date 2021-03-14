import { BASE_URL } from '../constant/api';

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
export {
    makeHttpRequest
}