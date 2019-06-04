import React from 'react'
import {Expenses, Debts, SalarySelector, SavingsGoal} from '.'

/**
 * COMPONENT
 */
export const InputSidebar = props => {

  return (
    <div  className="z-depth-2" id="sidebar"> 
      <Expenses />
      <Debts />
      <SalarySelector />
      <SavingsGoal />
    </div>
  )
}

export default InputSidebar