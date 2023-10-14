import React from "react";
import "../styles/FlightFinder.css";
import logoIllustration from "../Assets/logoIllustration.png";


const FlightData: React.FC = () => {
  return (
    <div className="flight-data">
      <div className="logo-sec">
        <img id="airline_logo" src={logoIllustration} alt="" />
        <div className="logo-sec-desc">
          <p>16h 45m</p>
          <p>Huwaiian Airlines</p>
        </div>
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
  );
};

export default FlightData;
