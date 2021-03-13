import React from 'react';
import CharacterList from '../../components/characters';
import HerosList from '../../components/heros';
import HerosStrength from '../../components/heroStrength';

const SuperSquad = () => {
    return (
        <div>
            <h2>Supper squad</h2>
            <CharacterList />
            <HerosList />
            <HerosStrength />
        </div>
    )
}
export default SuperSquad