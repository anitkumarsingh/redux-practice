import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMemes } from '../../redux/actions'

const MemeGenerator = () => {
    const dispatch = useDispatch();
    console.log('memes', useSelector(state => state))
    useEffect(() => {
        dispatch(fetchMemes())

    }, [dispatch])

    return (
        <div >
            This is meme generator page....
        </div>
    )
}

export default MemeGenerator;