import React from "react";
import { NavLink } from "react-router-dom";


const Landing = () => {
  
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img
            src="https://fiaks.com/wp-content/uploads/2019/03/Final-Fino-Payments-Bank-Logo_White.jpg"
            className="navbar-logo rounded"
            href="#"
            alt="logo"
          />
        </div>

        <div className="container-1">
          <p>User Name: ABC</p>
          <p>Backoffice</p>
        </div>

        <div className="container-2">
          <span>17/02/2024</span>
        </div>

        <div className="container-3">
          <button
            className="text-black bg-gray-400 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded-xl text-lg"
            type="submit"
          >
            Log Out
          </button>
        </div>
      </nav>
    
    <div className="flex ">
      <div className="Sidebar w-80 rounded-xl text-lg text-white font-semibold p-4 m-4 bg-blue-900">
      <NavLink to="/merchant-opening">
        <button>Merchant A/c Opening</button>
      </NavLink>

      <NavLink to="/merchant-update">
        <button>Merchant Update</button>
      </NavLink>

      <NavLink to="/merchant-dashboard">
        <button>Maker Checker Dashboard</button>
      </NavLink>
      
      <NavLink to="/merchant-activitypage">
        <button>Maker Cheaker Activity</button>
      </NavLink>
      </div>


      <div className="Main">
        <h1>This is landing Page</h1>
      </div>
      </div>
    </>
  );
};

export default Landing;
