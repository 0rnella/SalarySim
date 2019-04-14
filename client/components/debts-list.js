import React from 'react'
import {connect} from 'react-redux'
import {fetchDebtsList} from '../store'

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
    const {debtsList} = this.props
    return (
      <div>
        {debtsList.map(debtObj => (
          <div key = {debtObj.debtType}>
            <p>
              {debtObj.debtType}: {debtObj.amount}
            </p>
          </div>
        ))}
      </div>
    )
  }
}

/**
 * CONTAINER
 */

const mapState = state => ({
  debtsList: state.debts.debtsList,
})

const mapDispatch = dispatch => ({
  fetchDebts: () => dispatch(fetchDebtsList())
})

export default connect(mapState, mapDispatch)(DebtsList)
