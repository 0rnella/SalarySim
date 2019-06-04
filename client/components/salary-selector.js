import React from 'react'
import {connect} from 'react-redux'
import {setSalary} from '../store'

class SalarySelector extends React.Component {
  constructor(props) {
    super(props)
    this.changeValue = this.changeValue.bind(this)
  }

  changeValue(event) {
    const salary = Number(event.target.value) * 1000
    this.props.changeSalary(salary)
  }

  render() {
    const {salary} = this.props
    return (
      <div>
        <h4>Net Salary</h4>
        <p>
          Note: obtain the net salary from gross at{' '}
          <a href="https://neuvoo.com/tax-calculator/?iam=&uet_calculate=calculate&salary=80000&from=year&region=New+York&category=Engineering">
            this link
          </a>.
        </p>
        <input
          type="range"
          min="0"
          max="150"
          onChange={() => this.changeValue(event)}
        />
        Currently selected: Net: ${salary}
      </div>
    )
  }
}

const mapState = state => ({
  salary: state.salary
})

const mapDispatch = dispatch => ({
  changeSalary: salary => dispatch(setSalary(salary))
})

export default connect(mapState, mapDispatch)(SalarySelector)
