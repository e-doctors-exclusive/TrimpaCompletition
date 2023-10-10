import React ,{useEffect}  from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchData,addData } from './store/test'
import type { RootState,AppDispatch } from './store/index'
import { ProfileUser } from './Components/ProfileUser';


function App() {

  return (
    <div>
          <h1>hello</h1>
      <ProfileUser/>
    </div> 
  );
}

export default App;
