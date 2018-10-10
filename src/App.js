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
    this.setState({counter:this.state.counter + 1})
  }
}


export default App;
