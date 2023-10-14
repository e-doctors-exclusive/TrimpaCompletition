import "../styles/FlightFinder.css";
import React from "react";
import ArrowDownIcon from "../Assets/icons/chevron down.svg";

const FlightFinder: React.FC = () => {
  return (
    <>
      <div className="flighFinder_main_container">
        <div className="flighFinder_container">
          <div className="flighFinder_info">
            <ul className="flighFinder_search">
              <li></li>
              <li></li>
              {/* calendar */}
              {/* adult */}
              <button>Search</button>
            </ul>
            <div className="flighFinder_search_filter">
              <div className="filter_btns">
                <p>Max price</p>
                <img src={ArrowDownIcon} alt="" />
              </div>
              <div className="filter_btns">
                <p>Shops</p>
                <img src={ArrowDownIcon} alt="" />
              </div>
              <div className="filter_btns">
                <p>Times</p>
                <img src={ArrowDownIcon} alt="" />
              </div>
              <div className="filter_btns">
                <p>Airlines</p>
                <img src={ArrowDownIcon} alt="" />
              </div>
              <div className="filter_btns">
                <p>Seat class</p>
                <img src={ArrowDownIcon} alt="" />
              </div>
              <div className="filter_btns">
                <p>More</p>
                <img src={ArrowDownIcon} alt="" />
              </div>
            </div>
          </div>
          <div className="flighFinded">
            <div className="flighs_finded_data">
              <div className="flight_data_container">
                {/* data li bech tmapi aliha */}
                <div className="flight-data">
                  <div>
                    <p>16h 45m</p>
                    <p>Huwaiian Airlines</p>
                  </div>
                  <div>
                    <p>7:00AM - 4:15PM</p>
                  </div>
                  <div>
                    <p>1 stop</p>
                    <p>2h 45m in HNL</p>
                  </div>
                  <div>
                    <p>$624</p>
                    <p>round trip</p>
                  </div>
                </div>
                {/* data li bech tmapi aliha */}
              </div>
              {/* <button className="show_flights">Show all flights</button> */}
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
