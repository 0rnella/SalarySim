import React from 'react'
import {OverviewBar, Charts} from '.'
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
  const {expenses, debts, monthlySalary, savingsGoal} = props
  let monthlyExpenses = Math.floor(1.15 * sum(Object.values(expenses)))
  let sumDebts = sum(debts, 'amount')
  return (
    <div className="content-container-sidebar indigo lighten-5">
      <OverviewBar sumDebts={sumDebts} monthlyExpenses={monthlyExpenses} monthlySalary={monthlySalary} savingsGoal={savingsGoal}/>
      <Charts months={12} debts={debts} monthlyExpenses={monthlyExpenses} monthlySalary={monthlySalary} savingsGoal={savingsGoal} detailedExpenses={expenses} />
    </div>
  )
}

const mapProps = props => ({
  expenses: props.expenses,
  monthlySalary: Math.floor(props.salary / 12),
  debts: props.debts.debtsList,
  savingsGoal: props.savings
})

export default connect(mapProps)(Insights)
