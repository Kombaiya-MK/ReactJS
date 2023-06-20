
// function First(props) {

//   var num = 100;
//   return (
//     <div>
//         {props.pizza.name}
//         <input type ="text" value = {props.pizza.price}></input>
        
//     </div>

//   );
// }

// export default First;

import React from "react";
import {  Link, Outlet } from 'react-router-dom';

function First() {
  var num = 100;
  
  
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
            <li className="nav-item active">
            <Link className="nav-link" to="/register">Register</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/add">Create</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/data/106">Data</Link>
            </li>
          </ul>
        </div>
      </nav>

    </div>
    
  );
}

export default First;