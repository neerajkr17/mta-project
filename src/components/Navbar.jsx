import React from 'react';
/* eslint-disable */

import "./Navbar.css";

function Navbar() {

  return (
      <nav className="navbar">

          <div className="logo">
            <img src='https://fiaks.com/wp-content/uploads/2019/03/Final-Fino-Payments-Bank-Logo_White.jpg' className='navbar-logo' href="#" alt='logo' />
          </div>

          <div className="container-1">
            <p>User Name: ABC</p>
            <p>Backoffice</p>
          </div>

          <div className="container-2">
            <span>17/02/2024</span>
          </div>

          <div className='container-3'>
            <button type="submit">Log Out</button>
          </div>

    </nav>
  );
}

export default Navbar;
