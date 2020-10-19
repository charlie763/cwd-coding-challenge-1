import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return(
    <nav id="navbar" className="navbar navbar-expand-lg navbar-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-menu" aria-controls="nav-menu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-between" id="nav-menu">
        <div>
          <NavLink className="nav-text px-3" to="/">Home</NavLink>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-text px-3" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-text px-3" to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar