import React, { useState } from 'react';
import SideBar from './SideBar';
import '../styles/AddFlights.css';

const AddFlight = () => {
  const [clicked, setClicked] = useState(true);
  return (
    <div style={{ display: 'flex' }}>
      <SideBar setClicked={setClicked} clicked={clicked} />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          flex: 1,
          marginLeft: clicked ? '250px' : '70px',
        }}
      >
        <form className="formadd">
          <span className="titleadd">Add a Flight</span>
          <input type="text" className="input" placeholder="Flight n°" />
          <input type="text" className="input" placeholder="Airline" />
          <input type="text" className="input" placeholder="Plane model" />
          <input type="number" className="input" placeholder="Available seats" />
          <button>Register</button>
        </form>
      </div>
    </div>
  );
};

export default AddFlight;