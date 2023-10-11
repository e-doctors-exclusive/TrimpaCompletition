import React ,{useEffect}  from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchData,addData } from './store/test'
import type { RootState,AppDispatch } from './store/index'
import PassengerInfo from './Pages/PassengerInfo';
import LandingPage from "./Pages/LandingPage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PlaneBooking } from './Pages/PlaneBooking';

function App() {

  return (
    <div></div>
    // <BrowserRouter>
    // <Routes>
    //     <Route path="/" element={<LandingPage />}></Route>
    //     <Route path="userprofile" element={<ProfileUser />}></Route>
    //     <Route path="/PassengerInfo" element={<PassengerInfo />}></Route>
    // </Routes>
    // </BrowserRouter>
  )
}

export default App;
