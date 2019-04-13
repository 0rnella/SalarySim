import React from 'react'
import {connect} from 'react-redux'
import {setExpenses} from '../store'

class FormInput extends React.Component {
    constructor(props){
        super(props)
        this.changeValue = this.changeValue.bind(this)
    }

    changeValue(event) {
        const val = Number(event.target.value)
        const cat = this.props.label
        this.props.changeExpense(cat, val)
    }

    render(){
        const {inputType, label, value} = this.props
        return(
            <div>
                <h5>{label}</h5>
                <input type={inputType} value={value || undefined} onChange={() => this.changeValue(event)}/>
            </div>
        )
    }

}

const mapDispatch = dispatch => ({
    changeExpense: (category, value) => dispatch(setExpenses(category, value))
})

export default connect(null, mapDispatch)(FormInput)