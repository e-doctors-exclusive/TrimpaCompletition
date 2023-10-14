import "../styles/FlightFinder.css";
import React from "react";
import ArrowDownIcon from "../Assets/icons/chevron down.svg";
import DatePickers from "../Components/DatePickers";
import DepartIcon from "../Assets/icons/departure.svg";
import ArrivalIcon from "../Assets/icons/arrival.svg";
import CalendarIcon from "../Assets/icons/calendar.svg";
import PersonIcon from "../Assets/icons/person solid.svg";
import FlightData from "../Components/FlightData";

const FlightFinder: React.FC = () => {
  return (
    <>
      <div className="flighFinder_main_container">
        <div className="flighFinder_container">
          <div className="flighFinder_info">
            <ul className="flighFinder_search">
              <li>
                <img src={DepartIcon} alt="" />
                SFO
              </li>
              <li>
                <img src={ArrivalIcon} alt="" />
                NRT
              </li>
              <li>
                <img src={CalendarIcon} alt="" />
                Depart - Return
              </li>
              <li>
                <img src={PersonIcon} alt="" />1 adult
              </li>
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
              <p>
                Choose a <span>departing</span> flight
              </p>
              <div className="flight_data_container">
                {/* data li bech tmapi aliha */}
                <FlightData />
                <FlightData />
                <FlightData />
                <FlightData />
                <FlightData />
                <FlightData />
                <FlightData />
                <FlightData />
                <FlightData />
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
