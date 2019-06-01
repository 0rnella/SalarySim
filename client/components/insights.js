import React from 'react'
import {OverviewCard} from '.'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */

function sum(array, key) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    if (key) {
      sum += Number(array[i][key])
    } else {
      sum += Number(array[i])
    }
  }
  return sum
}
export const Insights = props => {
  const {expenses, debts, monthlySalary} = props
  let sumExpenses = Math.floor(1.15 * sum(Object.values(expenses)))
  let sumDebts = sum(debts, 'amount')
  return (
    <div className="col l9">
      <h1>WHoA</h1>
      <div id="overview-row">
        <OverviewCard
          color={'red'}
          number={sumExpenses}
          title={'Monthly expenses'}
        />
        <OverviewCard
          color={'green'}
          number={monthlySalary}
          title={'Monthly salary'}
        />
        <OverviewCard color={'blue'} number={sumDebts} title={'Total debts'} />
      </div>
    </div>
  )
}

const mapProps = props => ({
  expenses: props.expenses,
  monthlySalary: Math.floor(props.salary / 12),
  debts: props.debts.debtsList
})

export default connect(mapProps)(Insights)
