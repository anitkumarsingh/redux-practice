import React, { Component } from 'react';
import Header from '../components/blocks/header';
import Main from '../routes';

const App = () => {
    return (
        <>
            <Header />
            <div className="container p-5">
                <Main />
            </div>

        </>
    )
}

export default App;