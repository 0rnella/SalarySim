import React from 'react'
import {connect} from 'react-redux'
import {FormInput} from './'

/**
 * COMPONENT
 */

class Expenses extends React.Component {
    constructor(props){
        super(props)
        this.getWiggleRoom = this.getWiggleRoom.bind(this)
    }
    getWiggleRoom(){
        const summedCategoryExpenses = Object.values(this.props.expenses).reduce((a,b) => a+b)
        const fifteenPercent = summedCategoryExpenses * 0.15
        return fifteenPercent.toFixed(2)
    }
  render() {
    const {categories, expenses} = this.props
    return (
      <form>
        <h3>Enter your monthly expenses</h3>
        {categories.map(category => (
          <FormInput
            key={category}
            label={category}
            inputType="number"
            value={expenses[category]}
          />
        ))}
        <div>
            <h5>15% Unforeseen / Wiggle room:</h5>
            {this.getWiggleRoom()}
        </div>
      </form>
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

export default connect(mapState)(Expenses)
