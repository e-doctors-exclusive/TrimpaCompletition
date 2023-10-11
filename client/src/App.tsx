import React ,{useEffect}  from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchData,addData } from './store/test'
import type { RootState,AppDispatch } from './store/index'
import PassengerInfo from './Pages/PassengerInfo';
import LandingPage from "./Pages/LandingPage"
import ProfileUser from './Pages/ProfileUser';
import { Routes, Route } from "react-router-dom";
import SignUp from './Pages/SignUp';
// import ClientProfil from './Pages/ClientProfil';


function App() {

  return (
    <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/userprofile" element={<ProfileUser />}></Route>
        <Route path="/PassengerInfo" element={<PassengerInfo />}></Route>
        <Route path='/signUp' element={<SignUp/>}></Route>
        * Example: toFraction(3.0) === '3/1'
    </Routes>
  );
}

export default App;