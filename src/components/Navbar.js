import React from 'react';

function Navbar() {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">My work</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">My skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact me</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;