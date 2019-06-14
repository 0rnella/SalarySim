import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <div className = "nav-block indigo darken-2 z-depth-2">
    <h1 id="nav-logo">SalarySim</h1>
    <nav className="z-depth-0 transparent right-align">
      <Link to="/home">Home</Link>
    </nav>
    <hr />
  </div>
)

export default Navbar