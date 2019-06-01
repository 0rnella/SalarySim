import React from 'react'
import {Expenses, Debts, SalarySelector, SavingsGoal} from '.'

/**
 * COMPONENT
 */
export const InputSidebar = props => {

  return (
    <div  className="col l3 z-depth-2">
      <h4>Expenses</h4> 
      <Expenses />
      <h4>Debts</h4>
      <Debts />
      <h4>Salary</h4>
      <SalarySelector />
      <h4>Savings Goal</h4>
      <SavingsGoal />
    </div>
  )
}

export default InputSidebar