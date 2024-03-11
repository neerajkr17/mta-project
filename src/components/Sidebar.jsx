import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="Side h-[calc(100vh-100px)] w-auto">

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
  );
}

export default Sidebar;
