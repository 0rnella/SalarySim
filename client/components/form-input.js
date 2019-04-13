import React from 'react'

class FormInput extends React.Component {
    render(){
        const {inputType, label} = this.props
        return(
            <div>
                <h5>{label}</h5>
                <input type={inputType} value={0}/>
            </div>
        )
    }

}

export default FormInput