import React from "react";
import "./Verify.css";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

function Verify() {
  return (
    <div>
      <Navbar />
      <div className="verify-container">
        <Sidebar />
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Account Number</th>
                <th>Customer Name</th>
                <th>Account Status</th>
                <th>Account Restriction</th>
                <th>Lien/Hold</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Row 1, Cell 1</td>
                <td>Row 1, Cell 2</td>
                <td>Row 1, Cell 3</td>
                <td>Row 1, Cell 4</td>
                <td>Row 1, Cell 5</td>
                <td>
                  <button>Approved</button>
                  <button>Rejected</button>
                </td>
              </tr>
              <tr>
                <td>Row 2, Cell 1</td>
                <td>Row 2, Cell 2</td>
                <td>Row 2, Cell 3</td>
                <td>Row 2, Cell 4</td>
                <td>Row 2, Cell 5</td>
                <td>
                  <button>Approved</button>
                  <button>Rejected</button>
                </td>
              </tr>
              <tr>
                <td>Row 3, Cell 1</td>
                <td>Row 3, Cell 2</td>
                <td>Row 3, Cell 3</td>
                <td>Row 3, Cell 4</td>
                <td>Row 3, Cell 5</td>
                <td>
                  <button>Approved</button>
                  <button>Rejected</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Verify;
