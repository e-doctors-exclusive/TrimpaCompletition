import "../styles/FlightFinder.css";
import React from "react";

const FlightFinder: React.FC = () => {
  return (
    <>
      <div className="flighFinder_main_container">
        <div className="flighFinder_container">
          <div className="flighFinder_info">
            <div className="flighFinder_search"></div>
            <div className="flighFinder_search_filter"></div>
          </div>
          <div className="flighFinded">
            <div className=""></div>
            <div className=""></div>
          </div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default FlightFinder;
