import "react-toastify/dist/ReactToastify.css";
import "../src/styles/RouteTransition.css"
import React, {useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import { fetchData, addData } from "./store/test";
// import type { RootState, AppDispatch } from "./store/index";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { ToastContainer } from "react-toastify";
import PassengerInfo from "./Pages/PassengerInfo";
import LandingPage from "./Pages/LandingPage";
import ProfileUser from "./Pages/ProfileUser";
import PlaneBooking from "./Pages/PlaneBooking";
import Payment from "./Pages/Payment";
import FlightFinder from "./Pages/FlightFinder";
import Chat from "./Pages/Chat"
function App() {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <TransitionGroup className="transition-group">
        {/* CSSTransition for each route */}
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={300}
          appear
        >
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/my-profile" element={<ProfileUser />}></Route>
            <Route path="/PassengerInfo" element={<PassengerInfo />}></Route>
            <Route path="/PlaneBooking" element={<PlaneBooking />}></Route>
            <Route path="/Payment" element={<Payment />}></Route>
            <Route path="/FlightFinder" element={<FlightFinder />}></Route>
            <Route path="/chat" element={<Chat />}></Route>
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <ToastContainer />
    </div>
  );
}

export default App;
