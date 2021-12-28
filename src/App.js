import React, { Component } from 'react';
import './App.css';
import Letters from './components/Letters';
import Score from './components/Score';
import Solution from './components/Solution';
import Letter from './components/Letter';
import ret from 'bluebird/js/release/util';

//  .... //Eventually we will display all the available letters here: A - Z

export class App extends Component {
  constructor() {
    super()
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solution: {
        word: "AMIR",
        hint: "Your ideal mood when coding."
      },
      score: 100,
    }
  }
  checkLetter = (letter) => {
    let wordArray = this.state.solution.word.split('');
    let trueCunt =0
    wordArray.map(l => {
      if (l == letter) {
        trueCunt = trueCunt +1
      }
    })
    if (trueCunt) {
      return true
    }else{
      return false
    }
  }
  generateLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }

  changeLetterStatus = (letter) => {
    let allLetterStatus = Object.assign(this.state.letterStatus)
    allLetterStatus[letter] = true
    let newScore = this.state.score
    if(this.checkLetter(letter)){
      newScore = newScore + 5;
    }else{  
      newScore = newScore -20;
    }

    this.setState({
      letterStatus: allLetterStatus , 
      score : newScore
    })
  }

  render() {
    if (this.state.score <= 0) {
      alert("game over")
    }else{
      return (
        <div className="app">
          <Score score={this.state.score} key={this.state.score} />
          <Solution letters={this.state.letterStatus} solution={this.state.solution} key={this.state.solution.word} />
          <h4>{this.state.solution.hint}</h4>
          <Letters letters={this.state.letterStatus} key={'a'} changeLetterStatus={this.changeLetterStatus}></Letters >
        </div>
      )
    }
  }
}

