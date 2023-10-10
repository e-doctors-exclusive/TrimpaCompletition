import React ,{useEffect}  from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchData,addData } from './store/test'
import type { RootState,AppDispatch } from './store/index'
import PassengerInfo from './Pages/PassengerInfo';
import LandingPage from "./Pages/LandingPage"
import ProfileUser from './Pages/ProfileUser';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  
  return (
    <Router>
        <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="userprofile" element={<ProfileUser />} />
          <Route path="passangerinfo" element={<PassengerInfo />} />
        </Routes>
    </Router>
  );
}

export default App;
