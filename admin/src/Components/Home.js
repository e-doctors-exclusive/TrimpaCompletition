import React from 'react';
import SideBar from './SideBar';
import PieChartWithClick from './PieChartWithClick.js';
import BasicArea from './BasicArea';
import HorizontalBars from './HorizontalBars';
import BarsDataset from './BarsDataset';

const Home = () => {
  return (
    
      <div style={{ display: 'flex' }}>
        <SideBar />
      <div style={{ flex: 1, marginLeft: '250px' }}>
        <div style={{ display: 'flex' }}>
          <PieChartWithClick />
          <BasicArea />
        </div>
        <div style={{ display: 'flex' }}>
          <HorizontalBars />
          <BarsDataset />
          {/* Add the fourth component here */}
        </div>
      </div>
    </div>
  );
};

export default Home;
