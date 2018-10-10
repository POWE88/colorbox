import React, { Component } from 'react';
import './App.css';
import App from './App.js'

class Colorbox extends Component {
  render() {
    console.log(this.props)
    let style = {
            backgroundColor: this.props.newColor,
            justifyContent: "space-around",
            display: "flex",
            marginLeft: "20px",
            height:"300px",
            width:"300px",
            border:"3px solid black"
          }

    return (
      <div>
        <p style={style} onClick={this.props.handleClick}>


        </p>

      </div>
    );
  }
}



export default Colorbox;
