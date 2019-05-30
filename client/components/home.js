import React from 'react'
import {Expenses, Debts, SalarySelector, SavingsGoal} from '.'

/**
 * COMPONENT
 */
export const Home = props => {

  return (
    <div>
      <h3>Welcome!</h3>
      <Expenses />
      <Debts />
      <SalarySelector />
      <SavingsGoal />
    </div>
  )
}

export default Home