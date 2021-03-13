import React from 'react';
import {connect} from 'react-redux';
import {getCharacterById} from '../../redux/actions';
// import {bindActionCreators} from 'redux';
import Card from './card';

class CharacterList extends React.Component{
    render(){
        console.log('this props',this.props)
       
        return(
            <div>
                <h2>Characters</h2>
                <Card data={this.props.characters} addCharacter={this.props.getCharacterById}/>
            </div>
        )
    }
}  
const mapStateToProps = (state)=>{
return {
    characters:state.characters
}
}

// const mapDispatchToProps =(dispatch)=>{
//     return bindActionCreators({addCharacter},dispatch)
// }

export default connect(mapStateToProps,{getCharacterById})(CharacterList)