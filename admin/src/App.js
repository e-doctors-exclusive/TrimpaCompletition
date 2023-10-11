import React, { useEffect } from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from "./Components/LandingPage";
import SideBar from "./Components/SideBar"
import Home from "./Components/Home";
import Users from "./Components/Users"; 

function App() {
  return (
    <ProSidebarProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/users" element={<Users />}></Route>
      </Routes>
    </BrowserRouter>
    </ProSidebarProvider>
  );
}

export default App;
