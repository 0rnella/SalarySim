import axios from 'axios'

// /**
//  * ACTION TYPES
//  */
const SET_DEBT_TO_POST = 'SET_DEBT_TO_POST'
const RESET_DEBT_TO_POST = 'RESET_DEBT_TO_POST'
const UPDATE_DEBT_LIST = 'UPDATE_DEBTS_LIST'

// /**
//  * INITIAL STATE
//  */
const defaultDebt = {
  debtToPost: { 
    debtType: '',
    amount: 0,
    timeline: 0
  },
  debtsList: [],
}

// /**
//  * ACTION CREATORS
//  */
export const setDebtToPost = (debtInfo) => ({
  type: SET_DEBT_TO_POST,
  debtInfo,
})

const resetDebtToPost = () => ({
  type: RESET_DEBT_TO_POST
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
    dispatch(resetDebtToPost())
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
      const updatedDebtToPost = state.debtToPost
      updatedDebtToPost[action.debtInfo.parameter] = action.debtInfo.value
      return {...state, debtToPost: updatedDebtToPost}
    case RESET_DEBT_TO_POST:
      return {...state, debtToPost: defaultDebt.debtToPost}
    case UPDATE_DEBT_LIST:
      return {...state, debtsList: action.debtsList}
    default:
      return state
  }
}
