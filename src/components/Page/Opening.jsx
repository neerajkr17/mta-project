import React, { useState } from "react";
import "./Opening.css";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const Opening = () => {
  const [accountType, setAccountType] = useState("Current Account");
  const [panNumber, setPanNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cifNumber, setCifNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Account Type:", accountType);
    console.log("PAN Number:", panNumber);
    console.log("Phone Number:", phoneNumber);
    console.log("CIF Number:", cifNumber);
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="open-container">
          <div>
            <Sidebar />
          </div>
          <div className="Opening-page">
            <div className="toparea">
              <div>
                <label htmlFor="accountNumber">Account Number : </label>
                <input type="text" id="accountNumber" />
              </div>

              <div>
                <label htmlFor="accountType">Account Type:</label>
                <select
                  id="accountType"
                  value={accountType}
                  onChange={(e) => setAccountType(e.target.value)}
                >
                  <option value="Current Account">Current Account</option>
                  <option value="Saving Account">Saving Account</option>
                </select>
              </div>
            </div>

            <div className="midareapage-opening">
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
            <div className="opening-page-btn">
              <button>Submit</button>
              <button>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Opening;
