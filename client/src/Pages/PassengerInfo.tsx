import "../styles/PassengerInfo.css";
import React from "react";
import BagIllustration from "../Assets/Illustration.png";
import logoIllustration from "../Assets/logoIllustration.png";

function PassengerInfo() {
  return (
    <div className="container">
      <div className="main-container">
        <div className="passenger-form">
          <div className="required-info">
            <p id="pas_inf">Passenger information</p>
            <p>
              Enter the required information for each traveler and be sure that
              it exactly matches the government-issued ID presented at the
              airport.
            </p>
          </div>
          <div className="from1">
            <p>Passenger 1 (Adult)</p>
            <div className="form1-inputs">
              <input type="text" placeholder="First name*" />
              <input type="text" placeholder="Middle" />
              <input type="text" placeholder="Last name*" />
              <input type="text" placeholder="Suffix" />
              <input id="flexBasis" type="date" placeholder="Date of birth" />
            </div>
          </div>
          <div className="from2">
            <input type="text" placeholder="Email address*" />
            <input type="text" placeholder="Phone number*" />
            <input type="text" placeholder="Redress number" />
            <input type="text" placeholder="Known traveller number*" />
          </div>
          <div className="form3">
            <p>Emergency contact information</p>
            <div className="check">
              <input type="checkbox" />
              <p>Same as Passenger 1</p>
            </div>
            <div className="form4">
              <input type="text" placeholder="First name*" />
              <input type="text" placeholder="Last name*" />
              <input type="text" placeholder="Email adress*" />
              <input type="text" placeholder="Phone number*" />
            </div>
          </div>
          <div className="bag-info">
            <p id="title">Bag information</p>
            <p id="desc">
              Each passenger is allowed one free carry-on bag and one personal
              item. First checked bag for each passenger is also free. Second
              bag check fees are waived for loyalty program members.{" "}
              <span>See the full bag policy.</span>
            </p>
            <div className="bag-info-checked">
              <div className="first">
                <p id="title2">Passenger 1</p>
                <p>First Last</p>
              </div>
              <div className="second">
                <p id="title2">Checked bags</p>
                <div className="inc-btns">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M9 15H23C23.5523 15 24 15.4477 24 16C24 16.5523 23.5523 17 23 17L9 17C8.44772 17 8 16.5523 8 16C8 15.4477 8.44772 15 9 15Z"
                      fill="#605DEC"
                    />
                  </svg>
                  <p>1</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M15 15V9C15 8.44772 15.4477 8 16 8C16.5523 8 17 8.44772 17 9V15L23 15C23.5523 15 24 15.4477 24 16C24 16.5523 23.5523 17 23 17L17 17V23C17 23.5523 16.5523 24 16 24C15.4477 24 15 23.5523 15 23V17H9C8.44772 17 8 16.5523 8 16C8 15.4477 8.44772 15 9 15H15Z"
                      fill="#605DEC"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="choice-btns">
            <button>Save and close</button>
            <button id="larger">Select seats</button>
          </div>
        </div>
        <div className="trips">
          <div className="informatios">
            <div className="trip-info">
              <div className="aller">
                <div className="aller_container">
                  <img src={logoIllustration} alt="" />
                  <div className="img_title">
                    <p>Hawaiian Airlines</p>
                    <p className="ref">FIG4312</p>
                  </div>
                </div>
                <div className="time">
                  <p>16h 45m (+1d)</p>
                  <p>7:00 AM - 4:15 PM</p>
                  <p className="ref">2h 45m in HNL</p>
                </div>
              </div>
              <div className="retour">
                <div className="retour_container">
                  <img src={logoIllustration} alt="" />
                  <div className="img_title">
                    <p>Hawaiian Airlines</p>
                    <p className="ref">FIG4312</p>
                  </div>
                </div>
                <div className="time">
                  <p>16h 45m (+1d)</p>
                  <p>7:00 AM - 4:15 PM</p>
                  <p className="ref">2h 45m in HNL</p>
                </div>
              </div>
            </div>
            <div className="trip_fees">
              <div className="total-cost">
                <p>Subtotal</p>
                <p>Taxes and Fees</p>
                <p>Total</p>
              </div>
              <div className="prices">
                <p>$503</p>
                <p>$121</p>
                <p>$624</p>
              </div>
            </div>
            <button>Select seats</button>
          </div>
          <img src={BagIllustration} alt="" />
        </div>
      </div>
    </div>
  );
}

export default PassengerInfo;
