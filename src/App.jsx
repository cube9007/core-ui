import React from "react";
import { HashRouter, Route, Routes, Link } from "react-router-dom";

import HOME from "./page/HOME";

import GNB_Left from "./page/layout/GNB_Left";
import Top from "./page/layout/Top";
import LoginComponent from "./page/layout/LoginComponent";

import LoginPage from "./page/page/LoginPage";
import EquipmentData from "./page/page/EquipmentData";

import './assets/scss/style.scss';

function App() {
  return (
    <div>
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<HOME />} />
          
          <Route path="/page/layout/GNB_Left" element={<GNB_Left/>} />
          <Route path="/page/layout/Top" element={<Top/>} />
          <Route path="/page/layout/LoginComponent" element={<LoginComponent/>} />
          
          <Route path="/page/page/LoginPage" element={<LoginPage/>} />
          <Route path="/page/page/EquipmentData" element={<EquipmentData/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
