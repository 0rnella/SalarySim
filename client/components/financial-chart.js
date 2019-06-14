import React from 'react'
import {VictoryStack, VictoryChart, VictoryBar, VictoryAxis} from 'victory'

function FinancialChart (props) {
    const {financialData = [], monthlySalary} = props
    return (
      <div className="card-panel financial-chart">
        <VictoryChart>
          <VictoryStack
            vertical
            style={{data: {strokeWidth: 1, fillOpacity: 0.8, width: 6}}}
          >
            {financialData.map(category => (
              <VictoryBar
                key={category.title}
                data={category.data}
                style={{data: {fill: category.color}}}
              />
            ))}
            <VictoryAxis
              tickValues={financialData[0]['data'].map((item, idx) => idx)}
              tickFormat={t => t + 1}
            />
            <VictoryAxis dependentAxis tickValues={[0, monthlySalary]} />
          </VictoryStack>
        </VictoryChart>
      </div>
    )
}

export default FinancialChart
