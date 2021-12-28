
import React, { Component } from 'react';


class Score extends Component {
    
    render() {
        if (this.props.score>79) {
            return (        
                <div className='green'>
                {this.props.score}
            </div>
            )
        }
        else if (this.props.score<79 && this.props.score>50){
            return (        
                <div className='yellow'>
                {this.props.score}
            </div>
            )
        }
        else if (this.props.score<50 && this.props.score>-1){
            return (        
                <div className='red'>
                {this.props.score}
            </div>
            )
        }
    }
}
export default Score