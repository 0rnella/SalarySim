import React from 'react'
import {connect} from 'react-router-dom'
import {FormInput} from './'

/**
 * COMPONENT
 */

class Expenses extends React.Component {
    render(){
        return(
            <form>
                <h3>Enter your expenses</h3>
                <FormInput inputType="number" label="Monthly Rent" />
                <FormInput inputType="number" label="Food" />
                <FormInput inputType="number" label="Entertainment" />
                <FormInput inputType="number" label="Fitness/vacation/education" />
                <FormInput inputType="number" label="Clothing/home" />
                <FormInput inputType="number" label="Transportation" />
                <FormInput inputType="number" label="Bills (home, phone)" />
                15% Unforeseen / Wiggle room: 
            </form>
        )
    }

}

/**
 * CONTAINER
 */

 const mapState = (state) =>{

 }
 const mapProps = (props) => {

 }

export default Expenses