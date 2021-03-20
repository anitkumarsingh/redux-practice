import React, { useState } from 'react'

const MemesItem = ({ memes, postHandler }) => {
    const [hovered, setHovered] = useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={(e) => postHandler(e)}
            className="memes-item">
            <img src={memes.url} alt={memes.name} className={hovered ? "memes-img block-img" : "memes-img"} />
            <p className={hovered ? "memes-txt" : "hide-txt"}>{memes.name}</p>
        </div>
    )
}
export default MemesItem