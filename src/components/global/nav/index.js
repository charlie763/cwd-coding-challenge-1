import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = props => {
  return(
    <nav id="navbar" className="navbar navbar-expand-lg navbar-light justify-content-between">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-menu" aria-controls="nav-menu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div>
        <NavLink className="nav-text" to="/">Home</NavLink>
      </div>
      <div className="collapse navbar-collapse" id="nav-menu">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-text" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-text" to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar