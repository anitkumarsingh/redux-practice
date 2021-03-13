import React,{Component} from 'react';
import {connect} from 'react-redux'
import {calculateStats} from '../../utils'

class HerosStats extends Component{
    render(){
        const {heros}=this.props;
        return(
            <>
            {this.props.heros.length> 0 && (
                <>
                  <h2>Your Heros Squad Strength:</h2>
                 <h6><b>Strength : </b>{calculateStats('strength',heros)}</h6>
                 <h6><b>Intelligence : </b>{calculateStats('intelligence',heros)}</h6>
                 <h6><b>Speed : </b>{calculateStats('speed',heros)}</h6>
               </>
            )}
            </>
        )
    }
}

const mapStateToProps =(state)=>{
    return {heros:state.heros}
}
export default connect(mapStateToProps,null)(HerosStats);