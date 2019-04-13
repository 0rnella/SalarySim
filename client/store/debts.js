// /**
//  * ACTION TYPES
//  */
const SET_TYPE_OF_DEBT_TO_POST = 'SET_TYPE_OF_DEBT_TO_POST'
const SET_AMOUNT_OF_DEBT_TO_POST = 'SET_AMOUNT_OF_DEBT_TO_POST'
const ADD_DEBT = 'ADD_DEBT'
const SET_TIMELINE = 'SET_TIMELINE'

// /**
//  * INITIAL STATE
//  */
const defaultDebt = {
  debtToPost: {
    debtType: 'Grace Hopper Deferred Tuition',
    amount: 16910
  },
  debtsList: [],
  timeline: 9
}

// /**
//  * ACTION CREATORS
//  */
export const setTimeline = months => ({type: SET_TIMELINE, months})
export const setDebtType = debtType => ({
  type: SET_TYPE_OF_DEBT_TO_POST,
  debtType
})
export const setDebtAmount = amount => ({
  type: SET_AMOUNT_OF_DEBT_TO_POST,
  amount
})

// /**
//  * THUNK CREATORS
//  */
export const addDebt = () => ({
  type: ADD_DEBT
})

// /**
//  * REDUCER
//  */
export default function(state = defaultDebt, action) {
  switch (action.type) {
    case SET_TYPE_OF_DEBT_TO_POST:
      return {...state, debtToPost: {...state.debtToPost, debtType: action.debtType}}
    case SET_AMOUNT_OF_DEBT_TO_POST:
      return {...state, debtToPost: {...state.debtToPost, amount: action.amount}}
    case ADD_DEBT:
      const updatedList = [...state.debtsList, state.debtToPost]
      return {...state, debtsList: updatedList, debtToPost: {debtType: '', amount: 0}}
    case SET_TIMELINE:
      return {...state, timeline: action.timeline}
    default:
      return state
  }
}
