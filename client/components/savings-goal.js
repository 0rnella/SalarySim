import React from 'react'
import {connect} from 'react-redux'
import {setSavingsGoal} from '../store'

class SavingsGoal extends React.Component {
  constructor(props) {
    super(props)
    this.changeGoal = this.changeGoal.bind(this)
  }

  changeGoal(event) {
    const goal = Number(event.target.value)
    this.props.changeSavingsGoal(goal)
  }

  render() {
    const {savingsGoal} = this.props
    return (
      <div>
        <h4>Savings Goal</h4>
        <p>12 months after getting job</p>
        <input type="number" onChange={() => this.changeGoal(event)} />
      </div>
    )
  }
}

const mapState = state => ({
  savingsGoal: state.savings
})

const mapDispatch = dispatch => ({
  changeSavingsGoal: amount => dispatch(setSavingsGoal(amount))
})

export default connect(mapState, mapDispatch)(SavingsGoal)
