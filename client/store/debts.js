import axios from 'axios'

// /**
//  * ACTION TYPES
//  */
const SET_DEBT_TO_POST = 'SET_DEBT_TO_POST'
const UPDATE_DEBT_LIST = 'UPDATE_DEBTS_LIST'

// /**
//  * INITIAL STATE
//  */
const defaultDebt = {
  debtToPost: {
    debtType: 'Grace Hopper Program',
    amount: 16910,
    timeline: 9
  },
  debtsList: [],
}

// /**
//  * ACTION CREATORS
//  */
export const setDebtToPost = (name, value) => ({
  type: SET_DEBT_TO_POST,
  name,
  value
})
const updateDebtsList = debtsList => ({
  type: UPDATE_DEBT_LIST,
  debtsList
})

// /**
//  * THUNK CREATORS
//  */
export const addDebt = (debtToPost) => async dispatch => {
  try {
    const res = await axios.post('/api/debts', debtToPost)
    dispatch(updateDebtsList(res.data))
  } catch (error) {
    console.error(error)
  }
}

export const deleteDebt = (idx) => async dispatch => {
  try {
    const res = await axios.delete(`/api/debts/${idx}`)
    dispatch(updateDebtsList(res.data))
  } catch (error) {
    console.error(error)
  }
}

export const fetchDebtsList = () => async dispatch => {
  try {
    const res = await axios.get('/api/debts')
    dispatch(updateDebtsList(res.data))
  } catch (error) {
    console.error(error)
  }
}

// /**
//  * REDUCER
//  */
export default function(state = defaultDebt, action) {
  switch (action.type) {
    case SET_DEBT_TO_POST:
      return {...state, debtToPost: {...state.debtToPost}}
    case UPDATE_DEBT_LIST:
      return {...state, debtsList: action.debtsList}
    default:
      return state
  }
}
