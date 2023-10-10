import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, addData } from './store/test';
import type { RootState, AppDispatch } from './store/index';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import SignUp from './Components/SignUp';


function App() {
  return (
    <BrowserRouter>
    <Routes></Routes>
      <Route path="/singup"  element={<SignUp />}/>
    </BrowserRouter>
  );
}

export default App;