import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/superSquad';
import FoodReceipe from '../pages/foodReceipe';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/food-receipe" component={FoodReceipe} />
        </Switch>
    )
}
export default Routes;