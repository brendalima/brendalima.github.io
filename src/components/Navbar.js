import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Brenda Lima</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse ml-5" id="navbarSupportedContent">
        <ul className="navbar-nav">
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
    </nav>
  )
}

export default Navbar;