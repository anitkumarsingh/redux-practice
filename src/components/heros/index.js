import React,{Component} from 'react';
import {connect} from 'react-redux'
import {removeCharacterById} from '../../redux/actions'
import Card from '../characters/card';

class Heros extends Component{
    render(){
        return(
            <>
            {this.props.heros.length> 0 && (
                <>
                  <h2>Your Heros Squad:</h2>
                  <Card data={this.props.heros} addRemoveCharacter={this.props.removeCharacterById}/>
               </>
            )}
            </>
        )
    }
}

const mapStateToProps =(state)=>{
    return {heros:state.heros}
}
export default connect(mapStateToProps,{removeCharacterById})(Heros);