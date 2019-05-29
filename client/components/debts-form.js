import React from 'react'
import {connect} from 'react-redux'
import {setDebtToPost, addDebt} from '../store'
import { DebtsList } from './';

/**
 * COMPONENT
 */

class Debts extends React.Component {
  constructor(props) {
    super(props)
    this.editDebtToPost = this.editDebtToPost.bind(this)
    this.enterDebt = this.enterDebt.bind(this)
  }

  editDebtToPost(event) {
    event.preventDefault()
    const parameter = event.target.name
    const value = event.target.value
    this.props.setDebtToPost({parameter, value})
    this.forceUpdate()
  }

  enterDebt(event) {
    event.preventDefault()
    this.props.enterDebt(this.props.debtToPost)
  }

  render() {
    const {debtToPost} = this.props
    return (
      <div>
        <h3>Your debts:</h3>
        <DebtsList />
        <h3>Add a debt</h3>
        <form>
          <h5>Debt type:</h5>
          <input type="text" name="debtType" value={debtToPost.debtType} onChange={() => this.editDebtToPost(event)} />
          <h5>Amount:</h5>
          <input type="number" name="amount" value={debtToPost.amount} onChange={() => this.editDebtToPost(event)} />
          <h5>Timeline to pay off:</h5>
          <p><span>Within</span>
          <input type="number" name="timeline" value={debtToPost.timeline} onChange={() => this.editDebtToPost(event)} />
          <span>months of getting job</span></p>
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
  setDebtToPost: type => dispatch(setDebtToPost(type)),
  enterDebt: debtToPost => dispatch(addDebt(debtToPost)),
})

export default connect(mapState, mapDispatch)(Debts)
