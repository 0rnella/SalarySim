// /**
//  * ACTION TYPES
//  */
const SET_DEBT = 'SET_DEBT'
const SET_TIMELINE = 'SET_TIMELINE'

// /**
//  * INITIAL STATE
//  */
const defaultDebts = {
  timeline: 9
}

// /**
//  * ACTION CREATORS
//  */
export const setTimeline = months => ({type: SET_TIMELINE, months})
export const setDebt = (category, number) => ({
  type: SET_DEBT,
  category,
  number
})

// /**
//  * REDUCER
//  */
export default function(state = defaultDebts, action) {
  switch (action.type) {
    case SET_DEBT:
      const updatedState = {...state}
      updatedState[action.category] = action.number
      return updatedState
    case SET_TIMELINE:
      return {...state, timeline: action.timeline}
    default:
      return state
  }
}
