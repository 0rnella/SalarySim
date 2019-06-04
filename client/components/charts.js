import React from 'react'
import {FinancialChart} from '.'

/**
 * COMPONENT
 */


export const Charts = props => {
  const {months, monthlyExpenses, debts, monthlySalary, savingsGoal} = props
  return (
    <div className="row">
      <FinancialChart months={months} debts={debts} monthlyExpenses={monthlyExpenses} monthlySalary={monthlySalary} />
    </div>
  )
}

export default Charts
