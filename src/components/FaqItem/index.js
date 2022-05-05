// Write your code here.
import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
    const {details}=this.props 
    
    const {id,questionText,answerText} = this.details 

    state = {
        status : false
    }
    
    update = (){
           this.setState(prev => ({status:!(prev.status)}))
    }
    
    render(){
        const {status} = this.state
        return(
    <li className = "faq-con">
        <div className = "top-div">
             <p className = "title">
            {questionText}
              </p>
              <button className = "btn" onClick = {this.update}>
                { status ? <img src = "https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png" className = "img-icon" alt = "minus" /> : <img src = "https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png" } className = "img-icon" alt = "plus" /> 
                         }         
             </button>
        </div>
         {status && <hr/> }
        <p className = "des">
              {status  &&  answerText }
        </p>
    </li>
    )
    }
}
export default FaqItem