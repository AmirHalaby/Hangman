import React, { Component } from 'react';
import Letter from './Letter';


class Letters extends Component {
  
    changeLetterStatus = (letter) => {
        this.props.changeLetterStatus(letter)
    }

    getClass(letter){
        if(this.props.letters[letter]) return "selected"
    }

    render() {
        return (
                Object.keys(this.props.letters).map(c =>{                        
                    return (
                        <Letter letter ={c} key={c} changeLetterStatus={this.changeLetterStatus}  className={this.getClass(c)}/>
                    )
            })   
        )
    }
}        
 

export default Letters