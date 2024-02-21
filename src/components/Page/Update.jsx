import React from "react";
import "./Update.css";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

function Update() {
  return (
    <>
    <div>
        <Navbar/>
    <div className="update-container">
        <Sidebar/>
    <div className="update-page">
      <div className="toparea-update">
        <label htmlFor="merchantNo">Merchant A/c No: </label>
        <input type="text" id="merchantNo" />
        <button>Search</button>
      </div>

      <div className="midareapage">
        <div className="left">
          <div className="content">
            <label htmlFor="customerName">Customer Name : </label>
            <input type="text" id="customerName" />
          </div>
          <div className="content">
            <label htmlFor="address">Address : </label>
            <input type="text" id="address" />
          </div>
          <div className="content">
            <label htmlFor="gstin">GSTIN :</label>
            <input type="text" id="gstin" />
          </div>
        </div>
        <div className="right">
          <div className="content">
            <label htmlFor="panNumber">PAN Number :</label>
            <input type="text" id="panNumber" />
          </div>
          <div className="content">
            <label htmlFor="phoneNumber">Phone Number :</label>
            <input type="text" id="phoneNumber" />
          </div>
          <div className="content">
            <label htmlFor="cifNumber">CIF Number :</label>
            <input type="text" id="cifNumber" />
          </div>
        </div>
      </div>
      <div>
        <span>Edit</span>
      </div>
    </div>
    </div>
    </div>
    </>
  );
}

export default Update;
