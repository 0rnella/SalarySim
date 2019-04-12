import React from 'react'
import {connect} from 'react-router-dom'
import {FormInput} from './'
/**
 * COMPONENT
 */

 const formInputs = []
class Expenses extends React.Component {
    render(){
        return(
            <form>
                <h3>Enter your expenses</h3>
                <FormInput inputType="number" label="Rent" />
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