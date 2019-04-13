import React from 'react'
import {connect} from 'react-redux'
import {setDebtType, setDebtAmount, addDebt} from '../store'

/**
 * COMPONENT
 */

class Debts extends React.Component {
  constructor(props) {
    super(props)
    this.setDebtType = this.setDebtType.bind(this)
    this.setDebtAmount = this.setDebtAmount.bind(this)
    this.enterDebt = this.enterDebt.bind(this)
  }

  setDebtType(event) {
    event.preventDefault()
    this.props.setDebtType(event.target.value)
  }

  setDebtAmount(event) {
    event.preventDefault()
    this.props.setDebtAmt(event.target.value)
  }

  enterDebt(event){
    event.preventDefault()
    this.props.addDebt()
  }

  render() {
    const {debtsList} = this.props
    return (
      <div>
        <h3>Enter your debts to pay off</h3>
        {debtsList.map(
          debtObj => <div>{debtObj.category}: {debtObj.amount}</div>
        )}
        <form>
            <h5>Debt type:</h5>
            <input type="text"  onChange={() => this.setDebtType(event)}/>
            <h5>Amount:</h5>
            <input type="number" onChange={() => this.setDebtAmount(event)}/>
            <button onSubmit={this.enterDebt}>Enter</button>
        </form>
      </div>
    )
  }
}

/**
 * CONTAINER
 */

const mapState = state => ({
  debtsList: state.debts.debtsList,
  debtToPost: state.debts.debtToPost,
})

const mapDispatch = dispatch => ({
  setDebtType: (type) => dispatch(setDebtType(type)),
  setDebtAmt: (amount) => dispatch(setDebtAmount(amount)),
  addDebt: () => dispatch(addDebt())
})

export default connect(mapState, mapDispatch)(Debts)
