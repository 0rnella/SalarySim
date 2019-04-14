import React from 'react'
import {connect} from 'react-redux'
import {setDebtType, setDebtAmount, addDebt, fetchDebtsList} from '../store'
import { DebtsList } from '.';

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

  enterDebt(event) {
    event.preventDefault()
    this.props.enterDebt(this.props.debtToPost)
  }

  render() {
    // const {debtsList, enterDebt, debtToPost} = this.props
    return (
      <div>
        <h3>Your debts:</h3>
        <DebtsList />
        <h3>Add a debt</h3>
        <form>
          <h5>Debt type:</h5>
          <input type="text" onChange={() => this.setDebtType(event)} />
          <h5>Amount:</h5>
          <input type="number" onChange={() => this.setDebtAmount(event)} />
          <button onClick={() => this.enterDebt(event)}>Enter</button>
        </form>
      </div>
    )
  }
}

/**
 * CONTAINER
 */

const mapState = state => ({
  debtToPost: state.debts.debtToPost
})

const mapDispatch = dispatch => ({
  setDebtType: type => dispatch(setDebtType(type)),
  setDebtAmt: amount => dispatch(setDebtAmount(amount)),
  enterDebt: debtToPost => dispatch(addDebt(debtToPost)),
})

export default connect(mapState, mapDispatch)(Debts)
