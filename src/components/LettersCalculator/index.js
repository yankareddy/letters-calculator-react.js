import './index.css'
import React, { Component } from 'react';

class LettersCalculator extends Component {
  state = {
    count: 0, // Initialize count to 0
    inputValue: '' // Initialize inputValue to an empty string
  };

  onChangeSearchInput = (e) => {
    const inputValue = e.target.value;
    this.setState({
      count: inputValue.length, // Update count based on the length of the input value
      inputValue: inputValue // Update inputValue
    });
  };

  render() {
    const { count, inputValue } = this.state; // Destructure count and inputValue from state

    return (
      <div className="main-container">
        <div className="container-1">
          <h1 className="heading">Calculate the letters you enter</h1>
          <label className="para" htmlFor="letter">
            Enter the phrase
          </label>
          <br />
          <input
            type="text"
            className="inputEl"
            onChange={this.onChangeSearchInput}
            id="letter"
            value={inputValue} // Bind input value to inputValue from state
          />
          <p className="button">No.of letters: {count}</p> {/* Display the count */}
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
      </div>
    );
  }
}

export default LettersCalculator;
