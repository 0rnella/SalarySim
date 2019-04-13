import React from 'react'
import {connect} from 'react-redux'
import {FormInput} from './'

/**
 * COMPONENT
 */

class Debts extends React.Component {
  constructor(props) {
    super(props)
    this.enterDebt = this.enterDebt.bind(this)
  }

  enterDebt() {
    
  }
  render() {
    return (
      <form>
        <h3>Enter your debts to pay off</h3>
        <div>
          <h5>Debt type:</h5>
          <input type="text" value="grace hopper" />
          <h5>Amount:</h5>
          <input type="number" value={16910} />
          <button onClick={this.enterDebt}>Enter</button>
        </div>
        
      </form>
    )
  }
}

/**
 * CONTAINER
 */

const mapState = state => ({
  debts: state.debts
})

export default connect(mapState)(Debts)
