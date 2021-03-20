import React,{Component} from 'react';
import {connect} from 'react-redux'


class HerosStats extends Component{
    calculateStrength = () =>{
        let strength = 0
        this.props.heros.forEach(i => strength += i.strength)
       return strength
    }
    calculateIntelligence= () =>{
        let intelligence = 0
        this.props.heros.forEach(i => intelligence += i.intelligence)
       return intelligence
    }
    calculateSpeed= () =>{
       let speed = 0
        this.props.heros.forEach(i => speed += i.speed)
       return speed
    }
    render(){
        return(
            <>
            {this.props.heros.length> 0 && (
                <>
                  <h2>Your Heros Squad Strength:</h2>
                 <h6><b>Strength : </b>{this.calculateStrength()}</h6>
                 <h6><b>Intelligence : </b>{this.calculateIntelligence()}</h6>
                 <h6><b>Speed : </b>{this.calculateSpeed()}</h6>
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