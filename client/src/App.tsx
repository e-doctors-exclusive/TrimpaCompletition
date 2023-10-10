import React ,{useEffect}  from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchData,addData } from './store/test'
import type { RootState,AppDispatch } from './store/index'
import PassengerInfo from './Pages/PassengerInfo';
import LandingPage from "./Pages/LandingPage"
import ProfileUser from './Pages/ProfileUser';
import { Routes, Route } from "react-router-dom";


function App() {
  
  return (
    <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="userprofile" element={<ProfileUser />}></Route>
        <Route path="passangerinfo" element={<PassengerInfo />}></Route>
    </Routes>
  );
}

export default App;
