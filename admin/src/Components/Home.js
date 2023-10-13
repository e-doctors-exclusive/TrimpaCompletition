import React from 'react';
import { useState } from 'react';
import SideBar from './SideBar';
import AxisWithComposition from './PieChartWithClick.js';
import BasicArea from './BasicArea';
import HorizontalBars from './HorizontalBars';
import BarsDataset from './BarsDataset';

const Home = () => {
  const [clicked, setClicked] = useState(true);
  return (
    
    <div style={{ display: 'flex' }}>
    <SideBar setClicked={setClicked} clicked={clicked} />
    <div
      style={{
        marginTop:'200px',
        
    
        display: 'flex',
        flexWrap: 'wrap',
        flex: 1,
        marginLeft: clicked ? '250px' : '70px',
      }}
    >
        <div style={{ display: 'flex' }}>
          <AxisWithComposition />
          <BasicArea />
        </div>
        <div style={{ display: 'flex' }}>
          <HorizontalBars />
          <BarsDataset />
        </div>
      </div>
    </div>
  );
};

export default Home;
