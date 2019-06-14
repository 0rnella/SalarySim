import React from 'react'

export default class SavingsStatus extends React.Component {
    constructor (props){
        super(props)
        this.monthsUntilGoal = this.monthsUntilGoal.bind(this)
    }

    monthsUntilGoal (){
        const {debts, goal, monthlySalary, monthlyExpenses, payOneMonth} = this.props
        let monthIdx = 0
        let currentlySaved = 0
        while (currentlySaved < goal){
            let monthSavings = monthlySalary - payOneMonth(debts, monthIdx) - monthlyExpenses
            currentlySaved += monthSavings
            monthIdx++
        }
        return monthIdx
    }
    

    render (){
        return (
            <div className="card-panel financial-chart z-depth-2">
               <h3>With this salary, it would take <span className="indigo-text">{this.monthsUntilGoal()}</span> months to reach your savings goal of <span className="indigo-text">${this.props.goal}</span>.</h3>
            </div>
        )
    }
}