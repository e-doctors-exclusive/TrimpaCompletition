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
            <div className="flighs_finded_data">
              <div className="flight_data_container"></div>
              <button className="show_flights">Show all flights</button>
              <div className="trip_direction_map"></div>
            </div>
            <div className="flighs_finded_pricing"></div>
          </div>
        </div>
        <div className="flight_suggestion">
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default FlightFinder;
