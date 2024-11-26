import React from 'react'

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faRightFromBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons'

function Navigation() {

  const handleLogout = (event) => {
    console.log('Handle Logout')
  }

  return (
    <div className="navigation px-3">

      <div className="navigation-list-container d-flex w-100">

        <div className="d-flex w-100 justify-content-start">
          <ul className="navigation-list d-flex h-100 align-items-center m-0 p-0">
            <li className="px-1"><Link to="/">Home</Link></li>
            <li className="px-1"><Link to="/tasks">Tasks</Link></li>
          </ul>
        </div>

        <div className="d-flex w-100 justify-content-end">
          <ul className="navigation-list d-flex h-100 align-items-center m-0 p-0">
            <li className="px-1"><Link to="/user">User</Link></li>
            <li className="px-1"><Link to="/register">Register</Link></li>
            <li className="px-1"><Link to="/login">Login</Link></li>
            <li className="px-1"><button className="custom-button" onClick={(event) => handleLogout(event)}>Logout</button></li>
          </ul>
        </div>


      </div>
    </div>
  )
}

export default Navigation