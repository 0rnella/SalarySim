import React from 'react'
import {Expenses, Debts} from './'

/**
 * COMPONENT
 */
export const Home = props => {

  return (
    <div>
      <h3>Welcome!</h3>
      <Expenses />
      <Debts />
    </div>
  )
}

export default Home