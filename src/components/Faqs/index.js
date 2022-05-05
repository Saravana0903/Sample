// Write your code here.
import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="bg-con">
        <div className="box-con">
          <h1 className="main-head">FAQS</h1>
          <ul className="item-con">
            {faqsList.map(each => (
              <FaqItem details={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
