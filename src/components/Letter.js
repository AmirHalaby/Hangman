
import React, { Component } from 'react';


class Letter extends Component {
    changeLetterStatus = () => {
        this.props.changeLetterStatus(this.props.letter)
    }
    render() {
        if (this.props.letter != '_ ') {
                return (            
                    <span onClick={this.changeLetterStatus} className={this.props.className}>{this.props.letter}</span>
            )               
        }   
        return (            
            <span  className={this.props.className}>{this.props.letter}</span>
    )  
       
    }
}
export default Letter
