import React, { Component } from "react";
import "./css/RollDice.css"
import Dice from "./Dice";

class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"]
  }
  state = { dice1: "one", dice2: "two" }

  roll = () => {
    const newDice1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
    const newDice2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
    this.setState({ dice1: newDice1, dice2: newDice2 })
  }

  render() {
    return (<>
      <div className="RollDice">
        <div className="RollDice-container">
          <Dice face={this.state.dice1} />
          <Dice face={this.state.dice2} />
        </div>
        <button onClick={this.roll}>bul karayı al parayı</button>
      </div>
    </>)
  }
}

export default RollDice