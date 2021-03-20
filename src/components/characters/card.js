import React from 'react';

const Card =({data,addRemoveCharacter,operation})=>{
    return(
        <ul>
            {data.map(item=>{
            return(
                <li key={item.id} >
                    <div>{item.name}</div>
                    <div onClick={()=>addRemoveCharacter(item.id)}>{operation ==='Add' ? '+' :'x'}</div>
                </li>
                )})}
        </ul>
    )
}
export default Card;