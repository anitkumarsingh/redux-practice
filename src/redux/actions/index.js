export const ADD_CHARACTERS ="ADD_CHARACTERS";

export const addCharacter = (id)=>{
    const action ={
        type:ADD_CHARACTERS,
        id
    }
    return action
}