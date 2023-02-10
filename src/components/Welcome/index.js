// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {message: 'Subscribe'}

  onSubscribe = () => {
    this.setState(prevState => {
      if (prevState.message === 'Subscribe') {
        return (prevState.message = 'Subscribed')
      }
      return (prevState.message = 'Subscribe')
    })
  }
  render() {
    const {message} = this.state
    return (
      <div className="con">
        <h1>Welcome</h1>
        <p>Thank You! Happy Lernning</p>
        <button className="button" onClick={this.onSubscribe}>
          {message}
        </button>
      </div>
    )
  }
}

export default Welcome
