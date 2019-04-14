import axios from 'axios'

// /**
//  * ACTION TYPES
//  */
const SET_TYPE_OF_DEBT_TO_POST = 'SET_TYPE_OF_DEBT_TO_POST'
const SET_AMOUNT_OF_DEBT_TO_POST = 'SET_AMOUNT_OF_DEBT_TO_POST'
const UPDATE_DEBT_LIST = 'UPDATE_DEBTS_LIST'

// /**
//  * INITIAL STATE
//  */
const defaultDebt = {
  debtToPost: {
    debtType: '',
    amount: 0
  },
  debtsList: [],
}

// /**
//  * ACTION CREATORS
//  */
export const setDebtType = debtType => ({
  type: SET_TYPE_OF_DEBT_TO_POST,
  debtType
})
export const setDebtAmount = amount => ({
  type: SET_AMOUNT_OF_DEBT_TO_POST,
  amount
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
    case SET_TYPE_OF_DEBT_TO_POST:
      return {...state, debtToPost: {...state.debtToPost, debtType: action.debtType}}
    case SET_AMOUNT_OF_DEBT_TO_POST:
      return {...state, debtToPost: {...state.debtToPost, amount: action.amount}}
    case UPDATE_DEBT_LIST:
      return {...state, debtsList: action.debtsList, debtToPost: {debtType: '', amount: 0}}
    default:
      return state
  }
}
