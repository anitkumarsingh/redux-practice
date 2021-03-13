import characters from '../../mock/index.json';

const characterReducer = (state = characters,action)=>{
switch (action.type) {
    case 'value':
        
        break;

    default:
        return state
        
 }
}
export default characterReducer;