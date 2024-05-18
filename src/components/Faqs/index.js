import {Component} from 'react'
import FaqItem from '../FaqItem/index'
import './index.css'

const showList = [
  {show: false, id: 0},
  {show: false, id: 1},
  {show: false, id: 2},
  {show: false, id: 3},
]

class Faqs extends Component {
  state = {show: showList}

  onTogglePlusMinusButton = id => {
    this.setState(prevState => ({
      show: prevState.show.map(eachItem =>
        eachItem.id === id ? {...eachItem, show: !eachItem.show} : eachItem,
      ),
    }))
  }

  render() {
    const {faqsList} = this.props
    const {show} = this.state

    return (
      <div className="app-container">
        <div className="faqs-container">
          <h1 className="main-heading">FAQs</h1>
          <ul>
            {faqsList.map(eachItem => (
              <FaqItem
                key={eachItem.id}
                faq={eachItem}
                showList={show}
                onTogglePlusMinusButton={this.onTogglePlusMinusButton}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
