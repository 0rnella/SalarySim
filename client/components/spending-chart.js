import React from 'react'
import {VictoryPie, VictoryLegend} from 'victory'

function SpendingChart(props) {
  const {detailedExpenses} = props
  const formattedExpenses = Object.keys(detailedExpenses).map(key => ({
    x: key,
    y: detailedExpenses[key]
  }))
  const chartColors = [
    'tomato',
    'orange',
    'gold',
    'turquoise',
    'navy',
    'paleGoldenRod',
    'darkOrchid'
  ]
  const expensesLegend = formattedExpenses.map((expenseObj, idx) => ({
    name: expenseObj.x,
    symbol: {
      fill: chartColors[idx]
    }
  }))
  console.log(detailedExpenses)
  return (
    <div className="card-panel financial-chart">
      <VictoryPie
        colorScale={chartColors}
        labels={[]}
        data={formattedExpenses}
      />
      <VictoryLegend
        x={125}
        y={50}
        title="Monthly Expenses"
        orientation="vertical"
        gutter={20}
        data={expensesLegend}
      />
    </div>
  )
}

export default SpendingChart
