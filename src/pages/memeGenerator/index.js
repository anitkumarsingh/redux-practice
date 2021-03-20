import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMemes, addMemes } from '../../redux/actions';
import MemesItem from '../../components/memes';
import MemesForm from '../../components/forms/memes';
import '../../styles/index.css'

const MemeGenerator = () => {
    const [text0, setText0] = useState('');
    const [text1, setText1] = useState('');
    const dispatch = useDispatch();
    const memes = useSelector(state => state.memes);
    const [visibleMemes, setVisibleMemes] = useState(10);
    console.log('add mess', useSelector(state => state))

    useEffect(() => {
        dispatch(fetchMemes())

    }, [dispatch])

    const submitHandler = (e, id) => {
        e.preventDefault();
        const memesObject = {
            template_id: id,
            text0,
            text1
        }
        dispatch(addMemes(memesObject))
    }

    console.log(memes)
    return (
        <div className="memes-bg-color">
            <h1>Welcome To Memes Generator! </h1>
            <MemesForm setText0={setText0} setText1={setText1} />
            {memes && memes.slice(0, visibleMemes).map((m, index) => <MemesItem memes={m} key={index} text0={text0} text1={text1} postHandler={(e) => submitHandler(e, m.id)} />)}
            {visibleMemes <= memes.length ? <p onClick={() => setVisibleMemes(visibleMemes + 10)} className="memes-btn">Load More Memes...</p> : <p>Nothing to show</p>}

        </div>
    )
}

export default MemeGenerator;