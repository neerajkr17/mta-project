import React from 'react';
import { useNavigate } from 'react-router-dom';

/* eslint-disable */

import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

    function handleLanding() {
        navigate('/landing');
    }

  return (
      <nav className="navbar">

          <div className="logo">
            <img src='https://fiaks.com/wp-content/uploads/2019/03/Final-Fino-Payments-Bank-Logo_White.jpg' onClick={handleLanding} className='navbar-logo rounded' href="#" alt='logo' />
          </div>

          <div className="container-1">
            <p>User Name: ABC</p>
            <p>Backoffice</p>
          </div>

          <div className="container-2">
            <span>17/02/2024</span>
          </div>

          <div className='container-3'>
            <button className='text-black bg-gray-400 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded-xl text-lg' type="submit">Log Out</button>
          </div>

    </nav>
  );
}

export default Navbar;
