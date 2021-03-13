import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {addCharacter} from './redux/actions';

console.log('asasd',store.getState())
store.subscribe(()=>console.log('store',store.getState()))
store.dispatch(addCharacter(7))

ReactDOM.render(
    <Provider store={store}>
       <App/>
    </Provider>

,document.getElementById("root"))