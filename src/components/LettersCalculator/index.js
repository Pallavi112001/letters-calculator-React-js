// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    inputValue: '',
  }

  onChangeInputValue = event => {
    this.setState({inputValue: event.target.value})
  }

  render() {
    const {inputValue} = this.state
    return (
      <div className="bg-container">
        <div className="letter-calculator-container">
          <div className="calculator-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-value-container">
              <label className="label" htmlFor="text">
                Enter the Phrase
              </label>
              <input
                className="letters-input"
                id="text"
                onChange={this.onChangeInputValue}
                placeholder="Enter the phrase"
                type="text"
                value={inputValue}
              />
            </div>
            <p className="count">No.of letters: {inputValue.length}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
