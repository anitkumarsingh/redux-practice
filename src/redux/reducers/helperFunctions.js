import characters from '../../mock/index.json';

export const createHero = (id)=>{
    let heros =characters.find(hero=>hero.id === id);
    return heros;
}
