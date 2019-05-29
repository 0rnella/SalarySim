import React from 'react'
import {connect} from 'react-redux'
import {setExpense} from '../store'

class ExpenseRow extends React.Component {
  constructor(props) {
    super(props)
    this.changeValue = this.changeValue.bind(this)
  }

  changeValue(event) {
    const val = Number(event.target.value)
    const cat = this.props.label
    this.props.changeExpense(cat, val)
  }

  render() {
    const {inputType, label, value} = this.props
    return (
      <tr>
        <td>{label}</td>
        <td>
          <input
            type={inputType}
            value={value}
            onChange={() => this.changeValue(event)}
          />
        </td>
      </tr>
    )
  }
}

const mapDispatch = dispatch => ({
  changeExpense: (category, value) => dispatch(setExpense(category, value))
})

export default connect(null, mapDispatch)(ExpenseRow)
