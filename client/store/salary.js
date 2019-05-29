import axios from 'axios'

// /**
//  * ACTION TYPES
//  */
const SET_SALARY = 'SET_SALARY'

// /**
//  * INITIAL STATE
//  */
const defaultSalary = 80000

// /**
//  * ACTION CREATORS
//  */
const gotSalary = (salary) => ({
  type: SET_SALARY,
  salary
})

// /**
//  * THUNK CREATORS
//  */
export const setSalary = (salary) => async dispatch => {
  try {
    const res = await axios.post('/api/salary', {salary})
    dispatch(gotSalary(res.data))
  } catch (error) {
    console.error(error)
  }
}

export const getSalary = () => async dispatch => {
    try {
      const res = await axios.get('/api/salary')
      dispatch(gotSalary(res.data))
    } catch (error) {
      console.error(error)
    }
  }

// /**
//  * REDUCER
//  */
export default function(state = defaultSalary, action) {
  switch (action.type) {
    case SET_SALARY:
        return action.salary
    default:
      return state
  }
}
