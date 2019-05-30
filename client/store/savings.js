import axios from 'axios'

// /**
//  * ACTION TYPES
//  */
const SET_SAVINGS_GOAL = 'SET_SAVINGS_GOAL'

// /**
//  * INITIAL STATE
//  */
const defaultSavingsGoal = 0

// /**
//  * ACTION CREATORS
//  */
const gotSavingsGoal = (savingsGoal) => ({
  type: SET_SAVINGS_GOAL,
  savingsGoal
})

// /**
//  * THUNK CREATORS
//  */
export const setSavingsGoal = (savingsGoal) => async dispatch => {
  try {
    const res = await axios.post('/api/savings', {savingsGoal})
    dispatch(gotSavingsGoal(res.data))
  } catch (error) {
    console.error(error)
  }
}

export const getSavingsGoal = () => async dispatch => {
    try {
      console.log('in the get savings goal thunk')
      const res = await axios.get('/api/savings')
      dispatch(gotSavingsGoal(res.data))
    } catch (error) {
      console.error(error)
    }
  }

// /**
//  * REDUCER
//  */
export default function(state = defaultSavingsGoal, action) {
  switch (action.type) {
    case SET_SAVINGS_GOAL:
        return action.savingsGoal
    default:
      return state
  }
}
