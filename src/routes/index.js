import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/superSquad';
import FoodReceipe from '../pages/foodReceipe';
import FavouriteRecipes from '../pages/foodReceipe/favourite';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/food-receipe" component={FoodReceipe} />
            <Route path="/fav-recipes" component={FavouriteRecipes} />
        </Switch>
    )
}
export default Routes;