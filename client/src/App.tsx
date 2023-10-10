import React ,{useEffect}  from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchData,addData } from './store/test'
import type { RootState,AppDispatch } from './store/index'
import PassengerInfo from './Pages/PassengerInfo';



function App() {
  return (
    <div>
          {/* <h1>hello</h1> */}
          <PassengerInfo />
    </div> 
  );
}

export default App;