import React from 'react'
import {Link} from "react-router-dom";




function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-transperent fixed-top ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
      AI TOOLS DIRECTORY
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="tools">
            Tools
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Favourite
          </a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='login'>
            login
          </Link>
        </li>
      </ul> 
      {/* <Link to=''>Home</Link>
      <Link to='tools'>tool</Link>
      <Link to='favourite'>favourite</Link> */}
    </div>
  </div>
</nav>

    </>
    



  )
}

export default Header