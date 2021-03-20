import React, { useState } from 'react'

const MemesItem = ({ memes }) => {
    const [hovered, setHovered] = useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="memes-item">
            <img src={memes.url} alt={memes.name} className={hovered ? "memes-img block-img" : "memes-img"} />
            <p className={hovered ? "memes-txt" : "hide-txt"}>{memes.name}</p>
        </div>
    )
}
export default MemesItem