import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <div className = "nav-block green z-depth-2">
    <h1 id="nav-logo">SalarySim</h1>
    <nav className="z-depth-0 transparent right-align">
      <Link to="/home">Home</Link>
      <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/spreadsheets/d/1EklyFH4IF_GvJ09CMqBomKjI02YceJWJhYZBjoBcuzs/edit?usp=sharing">Spreadsheet</a>
    </nav>
    <hr />
  </div>
)

export default Navbar