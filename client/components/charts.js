import React from 'react'
import {FinancialChart, SavingsStatus} from '.'

/**
 * COMPONENT
 */

class Charts extends React.Component {
  constructor() {
    super()
    this.payOneMonth = this.payOneMonth.bind(this)
    this.getFinancials = this.getFinancials.bind(this)
  }

  payOneMonth(debts, monthIdx) {
    let paid = 0
    debts.forEach(debt => {
      if (debt.timeline > monthIdx) {
        paid += debt.amount / debt.timeline
      }
    })
    return paid
  }

  getFinancials(months, debts, monthlyExpenses, monthlySalary) {
    let debtsPaid = []
    let savings = []
    let expenses = []
    for (let i = 0; i < months; i++) {
      let debtPayment = this.payOneMonth(debts, i)
      debtsPaid.push(debtPayment)
      savings.push(monthlySalary - monthlyExpenses - debtPayment)
      expenses.push(monthlyExpenses)
    }
    return [
      {title: 'expenses', data: expenses, color: 'orange'},
      {title: 'debts paid', data: debtsPaid, color: '#ff4081'},
      {title: 'savings', data: savings, color: '#d4e157'}
    ]
  }

  render() {
    const {
      months,
      monthlyExpenses,
      debts,
      monthlySalary,
      savingsGoal
    } = this.props
    const finances = this.getFinancials(
      months,
      debts,
      monthlyExpenses,
      monthlySalary
    )
    return (
      <div className="row">
        <FinancialChart
          financialData={finances}
          monthlySalary={monthlySalary}
        />
        <SavingsStatus
          monthlyExpenses={monthlyExpenses}
          monthlySalary={monthlySalary}
          payOneMonth={this.payOneMonth}
          goal={savingsGoal}
          debts={debts}
        />
      </div>
    )
  }
}

export default Charts
