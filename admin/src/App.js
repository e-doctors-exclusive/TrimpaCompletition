import React, { useEffect, useState } from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from "./Components/LandingPage";
import SideBar from "./Components/SideBar"
import Home from "./Components/Home";
import Users from "./Components/Users"; 
import Flights from "./Components/Flights";
import Airlines from "./Components/Airlines"
import AddBrand from "./Components/AddBrand";
import AddFlight from "./Components/AddFlight";
import Chat from "./Components/Chat";





function App() {


 


  return (
    <ProSidebarProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/users" element={<Users />}></Route>
      <Route path="/flights" element={<Flights />}></Route>
      <Route path="/airlines" element={<Airlines/>}></Route>
      <Route path="/addairline" element={<AddBrand />}></Route>
      <Route path="/addflight" element={<AddFlight />}></Route>
      <Route path="/chat" element={<Chat />}></Route>
      </Routes>
    </BrowserRouter>
    </ProSidebarProvider>
  );
}

export default App;
