import React from 'react';
import './App.css';
import Opening from "./components/Page/Opening";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Update from "./components/Page/Update";
import Verify from "./components/Page/Verify";
import Modify from "./components/Page/Modify";
import Login from "./components/Login";

function App() {

  return (
    <>
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/merchant-opening" element={<Opening />} />
              <Route path="/merchant-update" element={<Update />} />
              <Route path="/merchant-verify" element={<Verify />} />
              <Route path="/merchant-modify" element={<Modify/>} />
            </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
