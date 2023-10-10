import React from "react";
import Navbar from "../Components/Navbar";
import TopHeader from "../Components/TopHeader";
import "../styles/landing.css";
function LandingPage() {
  return (
    <div>
      <TopHeader />
      <Navbar />
      <div className="landing">
        <div className="landing-forall">
        <div className="landing-title"><h1>It's more than just a trip</h1></div>

        <div className="landing-inputs">


          <div className="landing-input">
          <i className="fa-solid fa-plane-departure"></i>
          <select name="from" id="" placeholder="where are you going">
              <option value="">where are you going</option>
          </select>
          </div>

          <div className="landing-input">
          <i className="fa-solid fa-plane-arrival"></i>
          <select name="from" id="" placeholder="where are you going">
              <option value="">where are you comming</option>
          </select>
          </div>

          <div className="landing-input">
           <input type="date" placeholder="whene ?"/>
          </div>

          <div className="landing-input">
          <i className="fa-solid fa-user"></i>
           <input type="number" placeholder="Adults" />
          </div>
          <div>
             <button className="landing-boutton">search</button>
          </div>

        </div>
      </div>
      </div>
      <div className="section-one">
          <div className="landing-header">
             <h5></h5>
          </div>
          <div className="landing-cards">
              
           </div>
      </div>
     
    </div>
  );
}

export default LandingPage;
