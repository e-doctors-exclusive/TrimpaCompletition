import React, { useEffect } from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from "./Components/LandingPage";
import SideBar from "./Components/SideBar"
import Home from "./Components/Home";

function App() {
  return (
    <ProSidebarProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
    </ProSidebarProvider>
  );
}

export default App;
