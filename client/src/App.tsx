import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, addData } from "./store/test";
import type { RootState, AppDispatch } from "./store/index";
import PassengerInfo from "./Pages/PassengerInfo";
import LandingPage from "./Pages/LandingPage";
import ProfileUser from "./Pages/ProfileUser";
import PlaneBooking from "./Pages/PlaneBooking";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/userprofile" element={<ProfileUser />}></Route>
        <Route path="/PassengerInfo" element={<PassengerInfo />}></Route>
        
        
        <Route path="/planebooking" element={<PlaneBooking />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
