import React from 'react'
import {connect} from 'react-redux'
import {ExpenseRow} from './'
import {fetchExpenses} from '../store'

/**
 * COMPONENT
 */

class Expenses extends React.Component {
  constructor(props) {
    super(props)
    this.getWiggleRoom = this.getWiggleRoom.bind(this)
  }
  componentDidMount() {
    this.props.getExpenses()
  }

  getWiggleRoom() {
    const summedCategoryExpenses = Object.values(this.props.expenses).reduce(
      (a, b) => a + b
    )
    const fifteenPercent = summedCategoryExpenses * 0.15
    return fifteenPercent.toFixed(2)
  }

  render() {
    const {categories, expenses} = this.props
    return (
      <table>
      <thead>
        <td>Category</td>
        <td>Amount</td>
      </thead>
        <tbody>
          {categories.map(category => (
            <ExpenseRow
              key={category}
              label={category}
              inputType="number"
              value={expenses[category]}
            />
          ))}
          <tr>
            <td>15% Unforeseen / Wiggle room:</td>
            <td>{categories.length && this.getWiggleRoom()}</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

/**
 * CONTAINER
 */

const mapState = state => ({
  expenses: state.expenses,
  categories: Object.keys(state.expenses)
})

const mapDispatch = dispatch => ({
  getExpenses: () => dispatch(fetchExpenses())
})

export default connect(mapState, mapDispatch)(Expenses)
