import React,{Component} from 'react';
import CharacterList from '../components/characters';

class App extends Component{
    render(){
        return(
            <>
            <h2>Supper squad</h2>
            <CharacterList/>
            </>
        )
    }
}
export default App;