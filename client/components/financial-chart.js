import React from 'react'
import {VictoryStack, VictoryChart, VictoryBar, VictoryAxis, VictoryTheme, VictoryTooltip} from 'victory'
// import moment from 'moment'

class FinancialChart extends React.Component {
  constructor() {
    super()
    this.payOneMonth = this.payOneMonth.bind(this)
    this.getFinancials = this.getFinancials.bind(this)
  }

  payOneMonth(debts, monthIdx) {
    let paid = 0
    debts.forEach(debt => {
      if (debt.timeline > monthIdx){
        paid += debt.amount/debt.timeline
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
      {title: 'expenses', data: expenses, color: "orange"},
      {title: 'debts paid', data: debtsPaid, color: "#ff4081"},
      {title: 'savings', data: savings, color: "lime"} 
    ]
  }

  render() {
    const {months, debts, monthlyExpenses, monthlySalary} = this.props
    const finances = this.getFinancials(
      months,
      debts,
      monthlyExpenses,
      monthlySalary
    )
    console.log(finances)
    return (
        <VictoryChart>
          <VictoryStack
            vertical
            style={{data: {strokeWidth: 1.5, fillOpacity: 0.4, width: 6}}}
          >
            {finances.map( category => (
              <VictoryBar
                key={category.title}
                data={category.data}
                style={{data: {fill: category.color}}}
              />
            ))}
            <VictoryAxis
              tickValues={finances[0]["data"].map((item, idx) => idx)}
              tickFormat={t => t+1}
            />
            <VictoryAxis
              dependentAxis
              tickValues={[0, monthlySalary]}
            />
          </VictoryStack>
        </VictoryChart>
    )
  }
}

export default FinancialChart

