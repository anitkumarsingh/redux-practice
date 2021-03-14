import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const extractFavRecipes = useSelector(state => state.favRecipes);

    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <div className="nav-link">
                        <Link to="/">Home</Link>
                    </div>
                </li>
                <li className="nav-item active">
                    <div className="nav-link">
                        <Link to="/food-receipe">Food Finder</Link>
                    </div>
                </li>
                {extractFavRecipes.length > 0 ? <li className="nav-item active">
                    <div className="nav-link">
                        <Link to="/fav-recipes">Favourite Recipes</Link>
                    </div>
                </li> : null}
            </ul>
        </nav>
    )
}
export default Header;