import React,{Component} from 'react';
import CharacterList from '../components/characters';
import HerosList from '../components/heros';

class App extends Component{
    render(){
        return(
            <>
            <h2>Supper squad</h2>
            <CharacterList/>
            <HerosList/>
            </>
        )
    }
}
export default App;