import React,{Component} from 'react';
import {connect} from 'react-redux'
import {removeCharacterById} from '../../redux/actions'
import Card from '../characters/card';


class Heros extends Component{
    
    render(){
        console.log('hero state',this.props.removeCharacterById)
        return(
            <>
            <h2>Heros Squad</h2>
            <Card data={this.props.heros} addCharacter={this.props.removeCharacterById}/>
            </>
        )
    }
}

const mapStateToProps =(state)=>{
    return {heros:state.heros}
}
export default connect(mapStateToProps,{removeCharacterById})(Heros);