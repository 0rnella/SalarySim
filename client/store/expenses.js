
// /**
//  * ACTION TYPES
//  */
const SET_EXPENSE = 'SET_EXPENSE'

// /**
//  * INITIAL STATE
//  */
const defaultExpenses = {
  Rent: 0,
  Food: 0,
  Entertainment: 0,
  'Fitness/vacation/education': 0,
  'Clothing/home': 0,
  Transportation: 0,
  'Bills (home, phone)': 0
}

// /**
//  * ACTION CREATORS
//  */
export const setExpenses = (category, number) => ({
  type: SET_EXPENSE,
  category,
  number
})

// /**
//  * REDUCER
//  */
export default function(state = {}, action) {
  switch (action.type) {
      case SET_EXPENSE: 
        const updatedState = {...state}
        updatedState[action.category] = action.number
        return updatedState
    default:
      return state
  }
}
