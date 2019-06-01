import React from 'react'
import {InputSidebar, Insights} from '.'
/**
 * COMPONENT
 */
export const Home = props => {

  return (
    <div className="row">
      <InputSidebar />
      <Insights />
    </div>
  )
}

export default Home