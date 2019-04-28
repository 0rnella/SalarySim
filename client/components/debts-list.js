import React from 'react'
import {connect} from 'react-redux'
import {fetchDebtsList, deleteDebt} from '../store'

/**
 * COMPONENT
 */

class DebtsList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchDebts()
  }

  render() {
    const {debtsList, removeDebt} = this.props
    return (
      <div>
        {debtsList.length? debtsList.map((debtObj, idx) => (
          <div key={idx}>
            <p>
              {debtObj.debtType}: {debtObj.amount}
            </p>
            <button onClick={() => removeDebt(idx)}>X</button>
          </div>
        )) : 'No debts added. Add one below: '}
      </div>
    )
  }
}

/**
 * CONTAINER
 */

const mapState = state => ({
  debtsList: state.debts.debtsList
})

const mapDispatch = dispatch => ({
  fetchDebts: () => dispatch(fetchDebtsList()),
  removeDebt: idx => dispatch(deleteDebt(idx))
})

export default connect(mapState, mapDispatch)(DebtsList)
