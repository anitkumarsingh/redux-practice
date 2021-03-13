import React from 'react';

const Card =({data,addCharacter})=>{
    console.log('fun',addCharacter)
    return(
        <ul>
                    {data.map(item=>{
                            return(
                                <li key={item.id} >
                                <div>{item.name}</div>
                                <div onClick={()=>addCharacter(item.id)}>+</div>
                            </li>
                            )
                    })}
                </ul>
    )
}
export default Card;