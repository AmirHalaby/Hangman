import React, { Component } from 'react';
import Letter from './Letter';


class Solution extends Component {
    
    render() {

        let wordArray =this.props.solution.word.split('');
        return (
            
            wordArray.map((letter,i) => {
                if (this.props.letters[letter]) {
                    return (      
                        <Letter letter ={letter} key={i}  ></Letter>
                    )
                }
                else{   
                    return (   
                    <Letter letter ={'_ '} key={letter.letter}></Letter>
                    )    
                }
            })
                
        )
    }           
}       
     
    

export default Solution