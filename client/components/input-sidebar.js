import React from 'react'
import {Expenses, Debts, SalarySelector, SavingsGoal} from '.'

/**
 * COMPONENT
 */
export const InputSidebar = props => {

  return (
    <div  className="z-depth-2" id="sidebar"> 
      <SalarySelector />
      <SavingsGoal />
      <Expenses />
      <Debts />
    </div>
  )
}

export default InputSidebar