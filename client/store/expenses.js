import axios from 'axios'
// /**
//  * ACTION TYPES
//  */
const SET_EXPENSE = 'SET_EXPENSE'
const UPDATE_EXPENSES = 'UPDATE_EXPENSES'

// /**
//  * INITIAL STATE
//  */
const defaultExpenses = {}

// /**
//  * ACTION CREATORS
//  */
const updateExpenses = expenses => ({
  type: UPDATE_EXPENSES,
  expenses
})

// /**
//  * THUNK CREATORS
//  */
export const fetchExpenses = () => async dispatch => {
  try {
    const res = await axios.get('/api/expenses')
    dispatch(updateExpenses(res.data))
  } catch (error) {
    console.error(error)
  }
}

export const setExpense = (category, amount) => async dispatch => {
  try {
    const res = await axios.post('/api/expenses', {category, amount})
    dispatch(updateExpenses(res.data))
  } catch (error) {
    console.error(error)
  }
}

// /**
//  * REDUCER
//  */
export default function(state = defaultExpenses, action) {
  switch (action.type) {
    case SET_EXPENSE:
      const updatedState = {...state}
      updatedState[action.category] = action.number
      return updatedState
    case UPDATE_EXPENSES:
      return action.expenses
    default:
      return state
  }
}
