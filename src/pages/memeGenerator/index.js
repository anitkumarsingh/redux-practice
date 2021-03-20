import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMemes } from '../../redux/actions';
import MemesItem from '../../components/memes';
import '../../styles/index.css'

const MemeGenerator = () => {
    const dispatch = useDispatch();
    const memes = useSelector(state => state.memes);
    const [visibleMemes, setVisibleMemes] = useState(10);

    useEffect(() => {
        dispatch(fetchMemes())

    }, [dispatch])
    console.log(memes)
    return (
        <div className="memes-bg-color">
            <h1>Welcome To Memes Generator! </h1>
            {memes && memes.slice(0, visibleMemes).map((m, index) => <MemesItem memes={m} key={index} />)}
            {visibleMemes <= memes.length ? <p onClick={() => setVisibleMemes(visibleMemes + 10)} className="memes-btn">Load More Memes...</p> : <p>Nothing to show</p>}

        </div>
    )
}

export default MemeGenerator;