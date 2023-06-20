import React from "react";
import {  Link, Outlet } from 'react-router-dom';

function Navbar() {
    return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="nav-link" to="/">Home</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">
         
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
            <Link className="nav-link" to="/Login">Login</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/GetInterns">GetAllInterns</Link>
            </li>
          </ul>
        </div>
      </nav>

    </div>
    
  );
}

export default Navbar;