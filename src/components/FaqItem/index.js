import './index.css'

const FaqItem = props => {
  const {faq, showList, onTogglePlusMinusButton} = props
  const {id, questionText, answerText} = faq

  const show = () => {
    onTogglePlusMinusButton(id)
  }

  return (
    <li className="list-style">
      <div className="faq-question-container">
        <h1 className="quesiton-text">{questionText}</h1>
        <button type="button" onClick={show}>
          <img
            src={
              showList[id].show
                ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
            }
            alt={showList[id].show ? 'minus' : 'plus'}
            className="plus-minus-image"
          />
        </button>
      </div>
      {showList[id].show ? (
        <div>
          <hr className="horizontal-rule" />
          <p className="answer-text">{answerText}</p>
        </div>
      ) : (
        <div />
      )}
    </li>
  )
}

export default FaqItem
