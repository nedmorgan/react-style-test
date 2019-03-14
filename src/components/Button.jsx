import React, { Component } from 'react'

export default class Button extends Component {
  state = {
    hover: false,
    move: false
  }
  hoverEnter = () => {
    // console.log('Your mouse entered')
    this.setState({ hover: true });
  }
  hoverLeave = () => {
    // console.log('Your mouse has left')
    this.setState({ hover: false });
  }

  moveButton = () => {
    this.setState({ move: !this.state.move })
  }

  render() {
    const buttonStyles = {
      borderRadius: "5px",
      padding: "15px 25px",
      fontSize: "22px",
      textDecoration: "none",
      margin: "20px",
      color: "#fff",
      position: "relative",
      display: "inline-block",
      backgroundColor: this.state.hover ? "#6FC6FF" : "#55acee",
      boxShadow: this.state.move ? "0px 1px 0px 0px" : "0px 5px 0px 0px #3C93D5",
      transform: this.state.move ? "translate(0px, 5px)" : null,
    };

    return (
      <a href="#" style={buttonStyles} onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.moveButton} on>
        Click Me
      </a>
    )
  }
}