import React from 'react'

class FormInput extends React.Component {
    render(){
        const {inputType, label, value} = this.props
        return(
            <div>
                <h6>{label}</h6>
                <input type={inputType} value={value}/>
            </div>
        )
    }

}

export default FormInput