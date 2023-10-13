import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { fetchData, addData } from "./store/test";
// import type { RootState, AppDispatch } from "./store/index";
import PassengerInfo        from "./Pages/PassengerInfo";
import LandingPage          from "./Pages/LandingPage";
import ProfileUser          from "./Pages/ProfileUser";
import PlaneBooking         from "./Pages/PlaneBooking";
import Payment             from "./Pages/Payment";  
import FlightFinder from "./Pages/FlightFinder";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/my-profile" element={<ProfileUser />}></Route>
        <Route path="/PassengerInfo" element={<PassengerInfo />}></Route>
        <Route path="/PlaneBooking" element={<PlaneBooking />}></Route>
        <Route path="/Payment" element={<Payment />}></Route>
        <Route path="/FlightFinder" element={<FlightFinder />}></Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
