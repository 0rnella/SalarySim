import React from 'react'
import {connect} from 'react-redux'
import {setDebtToPost, addDebt} from '../store'
import {DebtsList} from './'

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
        <h4>Debts</h4>
        <DebtsList />
        <h6>Add a debt</h6>
        <form>
          <p>Debt type:</p>
          <input
            type="text"
            name="debtType"
            value={debtToPost.debtType}
            onChange={() => this.editDebtToPost(event)}
          />
          <p>Amount:</p>
          <input
            type="number"
            name="amount"
            value={debtToPost.amount}
            onChange={() => this.editDebtToPost(event)}
          />
          <p>
            Number of months to pay over:
            <input
              type="number"
              name="timeline"
              value={debtToPost.timeline}
              onChange={() => this.editDebtToPost(event)}
            />
          </p>
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
  enterDebt: debtToPost => dispatch(addDebt(debtToPost))
})

export default connect(mapState, mapDispatch)(Debts)
