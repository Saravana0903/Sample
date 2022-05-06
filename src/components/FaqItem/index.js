// Write your code here.
import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {
    status: false,
  }

  update = () => {
    this.setState(prev => ({status: !prev.status}))
  }

  getPic1 = () => (
    <img
      src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
      className="img-icon"
      alt="minus"
    />
  )

  getPic2 = () => (
    <img
      src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
      className="img-icon"
      alt="plus"
    />
  )

  render() {
    const {details} = this.props
    const {id, questionText, answerText} = this.details
    const {status} = this.state
    return (
      <li className="faq-con">
        <div className="top-div">
          <p className="title">{questionText}</p>
          <button className="btn" onClick={this.update}>
            {status ? this.getPic1() : this.getPic2()}
          </button>
        </div>
        {status && <hr />}
        <p className="des">{status && answerText}</p>
      </li>
    )
  }
}
export default FaqItem
