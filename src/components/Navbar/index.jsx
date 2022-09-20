import React from 'react'
import './index.css'

const Navbar = () => {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item px-3 py-3">
                <a className="nav-link link-primary" aria-current="page" href="/home"><b>Home</b></a>
              </li>
              <li className="nav-item px-3 py-3">
                <a className="nav-link link-primary" aria-current="page" href="/recipe/add"><b>Add Recipe</b></a>
              </li>
              <li className="nav-item px-3 py-3">
                <a className="nav-link link-primary" aria-current="page" href="#"><b>Profile</b></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar