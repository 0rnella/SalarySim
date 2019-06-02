import React from 'react'
import {OverviewCard, FinancialChart} from '.'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const OverviewBar = props => {
  const {sumDebts, monthlyExpenses, monthlySalary, savingsGoal} = props

  return (
      <div id="overview-row" className="row">
        <OverviewCard
          color1="orange"
          color2="pink"
          number={monthlyExpenses}
          title="Monthly expenses"
        />
        <OverviewCard
          color1="blue"
          color2="teal"
          number={monthlySalary}
          title="Monthly salary"
        />
        <OverviewCard color1="pink accent-2" color2="hot-pink" number={sumDebts} title="Total debts" />
        <OverviewCard color1="lime" color2="lime lighten-2" number={savingsGoal} title="Savings goal" />
    </div>
  )
}

export default OverviewBar
