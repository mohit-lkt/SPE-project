import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink} from "react-router-dom";
import { useSelector } from 'react-redux'

const Navbar = () => {
  // console.log(atob());
  const { token: userToken } = useSelector(state => state.home)
  const [ isLoggedIn, setIsLoggedIn] = useState(false)

  // console.log(token);

  useEffect(() => {
    // console.log('toekn',token);
    const { token } = JSON.parse(sessionStorage.getItem('token')) || []
    if(token ) setIsLoggedIn(true)
  }, [ userToken ])
  return(
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to={isLoggedIn ? '/add-skill' : '/login'}>Register as vendor <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/Signup">Signup</NavLink>
      </li>

      {/* <li className="nav-item">
        <NavLink className="nav-link" to="/Contact">Contact</NavLink>
      </li> */}
      

    </ul>
   
  </div>
</nav>
    </>
  )
}

export default Navbar