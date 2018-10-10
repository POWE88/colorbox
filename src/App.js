import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Colorbox from './colorbox.js'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      //currentColor: "black",
      counter: 0,
      color: ["green", "blue", "yellow", "red", "purple", "white", "gray", "orange", "lightblue"]
    }
  }
  render() {
    return (
      <div className="App" >
        <Colorbox newColor={this.state.color[this.state.counter]}
                  handleClick={this.changeColor}/>
      </div>
    );
  }

  changeColor = () => {
    let { counter: newCounter, color } = this.state


    //if index > array.length, loop back to index 0
    if(newCounter < color.length - 1){
      //newCounter = 0
      //this.setState({counter:newCounter})

      this.setState({counter: ++newCounter})

    } else {
        newCounter = 0
        this.setState({counter:newCounter})
        //this.setState({counter:newCounter++})
    }
  }
}


export default App;
