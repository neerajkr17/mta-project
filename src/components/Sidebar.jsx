import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="Side">

      <NavLink to="/merchant-opening">
        <button>Merchant A/c Opening</button>
      </NavLink>

      <NavLink to="/merchant-update">
        <button>Merchant Update</button>
      </NavLink>

      <NavLink to="/merchant-modify">
        <button>Merchant Maker Modify</button>
      </NavLink>
      
      <NavLink to="/merchant-verify">
        <button>Merchant Checker Verify</button>
      </NavLink>
    </div>
  );
}

export default Sidebar;
