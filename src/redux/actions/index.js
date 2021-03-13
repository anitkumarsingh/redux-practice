export const ADD_CHARACTERS ="ADD_CHARACTERS";

export const getCharacterById = (id)=>{
    const action ={
        type:ADD_CHARACTERS,
        id
    }
    return action
}