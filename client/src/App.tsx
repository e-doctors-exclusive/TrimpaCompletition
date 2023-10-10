import React ,{useEffect}  from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchData,addData } from './store/test'
import type { RootState,AppDispatch } from './store/index'
import PassengerInfo from './Pages/PassengerInfo';
import LandingPage from "./Pages/LandingPage"
import ProfileUser from './Pages/ProfileUser';
import { Routes, Route ,BrowserRouter} from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";


function App() {

  return (
    // <BrowserRouter>
    // <Routes>
    //     <Route path="/" element={<LandingPage />}></Route>
    //     <Route path="userprofile" element={<ProfileUser />}></Route>
    //     <Route path="/PassengerInfo" element={<PassengerInfo />}></Route>
    // </Routes>
    // </BrowserRouter>
    <ProfileUser/>
  );
}

export default App;
