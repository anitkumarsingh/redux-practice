import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavRecipes } from '../../redux/actions';

const Favourite = () => {
    const favRecipes = useSelector(state => state.favRecipes)
    const dispatch = useDispatch();
    return (
        <div className="text-center pt-10">
            {favRecipes && favRecipes.map(fav => <ul><li>{fav.title} <span onClick={() => dispatch(removeFavRecipes(fav.title))}>x</span></li></ul>)}
        </div>
    )
}

export default Favourite;