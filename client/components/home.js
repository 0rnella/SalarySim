import React from 'react'
import {Expenses, Debts, SalarySelector} from '.'

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
    </div>
  )
}

export default Home