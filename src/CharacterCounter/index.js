import {Component} from 'react'
import {v4} from 'uuid'
import './index.css'

// Replace your code here
class App extends Component {
  state = {enteredInput: '', inputList: []}

  onChangeSearch = event => {
    this.setState({enteredInput: event.target.value})
  }

  onSubmit = event => {
    event.preventDefault()
    const {enteredInput} = this.state
    const inputKeys = {
      id: v4(),
      item: enteredInput,
    }
    this.setState(prevState => ({
      inputList: [...prevState.inputList, inputKeys],
      enteredInput: '',
    }))
  }

  render() {
    const {enteredInput, inputList} = this.state

    return (
      <div className="main-container">
        <div className="left-top">
          <h1 className="heading">Count the characters like a Boss</h1>

          <div className="left-bottom">
            {inputList.length === 0 ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                className="image"
                alt="no user inputs"
              />
            ) : (
              <ul className="list-container">
                {inputList.map(each => (
                  <li key={each.id}>
                    <p key={each.id} className="list-element">
                      {each.item}: {each.item.length}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="right-div">
          <h1 className="right-head">Character Counter</h1>
          <div className="input-container">
            <form onSubmit={this.onSubmit} className="form">
              <input
                type="text"
                className="input"
                placeholder="Enter the characters here"
                onChange={this.onChangeSearch}
                value={enteredInput}
              />
              <button className="add-button" type="submit">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App
