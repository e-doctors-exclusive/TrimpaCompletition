import React from 'react'
import "../styles/PlaneBooking.css"

import point from "../Assets/tripmaBooking/point heavy.png"
import check from "../Assets/tripmaBooking/check heavy.png"
import vector17 from "../Assets/tripmaBooking/Vector 17.png"
import vector18 from "../Assets/tripmaBooking/Vector 18.png"
import rectangle15 from "../Assets/tripmaBooking/Rectangle 15.png"
import rectangle9 from "../Assets/tripmaBooking/Rectangle 9.png"
import seatBussines from "../Assets/tripmaBooking/seatBusiness.png"
import seatEmptyBussines from "../Assets/tripmaBooking/seatEmptyBussines.png"
import seatEco from "../Assets/tripmaBooking/seatEco.png"
import seatEcoEmpty from "../Assets/tripmaBooking/emptyEconomy.png"
import info from "../Assets/tripmaBooking/information.png"
import wordmark from "../Assets/tripmaBooking/Wordmark.png"
import arrowRight from "../Assets/tripmaBooking/arrowRight.png"
import ecoSeats from "../Assets/tripmaBooking/Economy Seats.png"
import bussinesSeats from "../Assets/tripmaBooking/Business Seats.png"

const PlaneBooking = () => {
  return (
    <div className='tripma_container'>
      <div className="tripma">
        <div className="plane-seat-selection">
          {/* <img
            className="plane-seat-selection-child"
            alt=""
            src="/rectangle-10.svg"
          />
          <img
            className="plane-seat-selection-item"
            alt=""
            src="/rectangle-10.svg"
          /> */}
          <img
            className="plane-seat-selection-inner"
            alt=""
            src={rectangle9}
          />
          <img className="vector-icon" alt="" src={vector17} />
          <img
            className="plane-seat-selection-child1"
            alt=""
            src={vector18}
          />
          <img className="rectangle-icon" alt="" src={rectangle15} />
          <div className="business">
            <div className="seat-row-business">
              <img className="seat-icon" alt="" src={seatBussines} />
              <img className="seat-icon" alt="" src={seatEmptyBussines} />
              <div className="row-number">
                <div className="div">1</div>
              </div>
              <img className="seat-icon" alt="" src={seatEmptyBussines} />
              <img className="seat-icon" alt="" src={seatBussines} />
            </div>
            <div className="seat-row-business">
              <img className="seat-icon" alt="" src={seatBussines} />
              <img className="seat-icon" alt="" src={seatEmptyBussines} />
              <div className="row-number">
                <div className="div">2</div>
              </div>
              <img className="seat-icon" alt="" src={seatEmptyBussines} />
              <img className="seat-icon" alt="" src={seatEmptyBussines} />
            </div>
            <div className="seat-row-business">
              <img className="seat-icon" alt="" src={seatEmptyBussines} />
              <img className="seat-icon" alt="" src={seatEmptyBussines} />
              <div className="row-number">
                <div className="div">3</div>
              </div>
              <img className="seat-icon" alt="" src={seatEmptyBussines} />
              <img className="seat-icon" alt="" src={seatBussines} />
            </div>
            <div className="seat-row-business">
              <img className="seat-icon" alt="" src={seatBussines} />
              <img className="seat-icon" alt="" src={seatEmptyBussines} />
              <div className="row-number">
                <div className="div">4</div>
              </div>
              <img className="seat-icon" alt="" src={seatEmptyBussines} />
              <img className="seat-icon" alt="" src={seatBussines} />
            </div>
            <div className="seat-row-business">
              <img className="seat-icon" alt="" src={seatBussines} />
              <img className="seat-icon" alt="" src={seatEmptyBussines} />
              <div className="row-number">
                <div className="div">5</div>
              </div>
              <img className="seat-icon" alt="" src={seatEmptyBussines} />
              <img className="seat-icon" alt="" src={seatBussines} />
            </div>
          </div>
          <div className="economy">
            <div className="seat-row-exit-row">
              <div className="exit-row">Exit row</div>
              <img
                className="information-icon"
                alt=""
                src={info}
              />
            </div>
            <div className="seat-row-economy">
              <img className="seat-icon20" alt="" src={seatEco} />
              <img className="seat-icon20" alt="" src={seatEco} />
              {/* <img className="seat-icon20" alt="" src={seatEco} /> */}
              <div>
                <input className='inputTest1'
                  type="checkbox"
                  id="seat1"
                  name="seat-eco"
                  value="A1" />
              </div>
              <div className="row-number">
                <div className="div">6</div>
              </div>
              <img className="seat-icon20" alt="" src={seatEcoEmpty} />
              <img className="seat-icon20" alt="" src={seatEco} />
              <img className="seat-icon20" alt="" src={seatEcoEmpty} />
            </div>
            <div className="seat-row-economy">
              <img className="seat-icon20" alt="" src={seatEco} />
              <img className="seat-icon20" alt="" src={seatEco} />
              <img className="seat-icon20" alt="" src={seatEcoEmpty} />
              <div className="row-number">
                <div className="div">7</div>
              </div>
              <img className="seat-icon20" alt="" src={seatEco} />
              <img className="seat-icon20" alt="" src={seatEco} />
              <img className="seat-icon20" alt="" src={seatEcoEmpty} />
            </div>
            <div className="seat-row-economy">
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <div className="row-number">
                <div className="div">8</div>
              </div>
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
            </div>
            <div className="seat-row-economy">
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <div className="row-number">
                <div className="div">9</div>
              </div>
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
            </div>
            <div className="seat-row-economy">
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <div className="row-number">
                <div className="div">10</div>
              </div>
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
            </div>
            <div className="seat-row-economy">
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <div className="row-number">
                <div className="div">11</div>
              </div>
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
            </div>
            <div className="seat-row-economy">
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <div className="row-number">
                <div className="div">12</div>
              </div>
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
            </div>
            <div className="seat-row-economy">
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <div className="row-number">
                <div className="div">13</div>
              </div>
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
            </div>
            <div className="seat-row-exit-row">
              <div className="exit-row">Exit row</div>
              <img className="information-icon" alt="" src="/rectangle-10.svg" />
            </div>
            <div className="seat-row-economy">
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <div className="row-number">
                <div className="div">14</div>
              </div>
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
            </div>
            <div className="seat-row-economy">
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <div className="row-number">
                <div className="div">15</div>
              </div>
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
            </div>
            <div className="seat-row-economy">
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <div className="row-number">
                <div className="div">16</div>
              </div>
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
            </div>
            <div className="seat-row-economy">
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <div className="row-number">
                <div className="div">17</div>
              </div>
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
            </div>
            <div className="seat-row-economy">
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <div className="row-number">
                <div className="div">18</div>
              </div>
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
            </div>
            <div className="seat-row-exit-row">
              <div className="exit-row">Exit row</div>
              <img className="information-icon" alt="" src="/rectangle-10.svg" />
            </div>
            <div className="seat-row-economy">
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <div className="row-number">
                <div className="div">19</div>
              </div>
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
            </div>
            <div className="seat-row-economy">
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <div className="row-number">
                <div className="div">20</div>
              </div>
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
            </div>
            <div className="seat-row-economy">
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <div className="row-number">
                <div className="div">21</div>
              </div>
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
            </div>
            <div className="seat-row-economy">
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <div className="row-number">
                <div className="div">22</div>
              </div>
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
            </div>
            <div className="seat-row-economy">
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <div className="row-number">
                <div className="div">23</div>
              </div>
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
            </div>
            <div className="seat-row-economy">
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <div className="row-number">
                <div className="div">24</div>
              </div>
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
            </div>
            <div className="seat-row-economy">
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <div className="row-number">
                <div className="div">25</div>
              </div>
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
            </div>
            <div className="seat-row-economy">
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <div className="row-number">
                <div className="div">26</div>
              </div>
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
            </div>
            <div className="seat-row-economy">
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <div className="row-number">
                <div className="div">27</div>
              </div>
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
            </div>
            <div className="seat-row-economy">
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <div className="row-number">
                <div className="div">28</div>
              </div>
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
            </div>
            <div className="seat-row-exit-row">
              <div className="exit-row">Exit row</div>
              <img className="information-icon" alt="" src="/rectangle-10.svg" />
            </div>
            <div className="seat-row-economy">
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <div className="row-number">
                <div className="div">29</div>
              </div>
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
            </div>
            <div className="seat-row-economy">
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <div className="row-number">
                <div className="div">30</div>
              </div>
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
            </div>
            <div className="seat-row-economy">
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <div className="row-number">
                <div className="div">31</div>
              </div>
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
            </div>
            <div className="seat-row-economy">
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <div className="row-number">
                <div className="div">32</div>
              </div>
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
            </div>
            <div className="seat-row-economy">
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <div className="row-number">
                <div className="div">33</div>
              </div>
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
              <img className="seat-icon20" alt="" src="/rectangle-10.svg" />
            </div>
          </div>
        </div>
        <div>
          {/* <div>sqjk,nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnl</div>
          <div>sqjkl</div> */}
        </div>
        <div className="seat-selector">
          <div className="border" />
          <div className="content">
            <div className="progress-step-header-default">
              <div className="flight-information">
                <div className="flight-info-information-da">
                  <div className="code">SFO</div>
                  <div className="location">California, US</div>
                </div>
                <img
                  className="arrowright-icon"
                  alt=""
                  src={arrowRight}
                />
                <div className="flight-info-information-da">
                  <div className="code">NRT</div>
                  <div className="location">Tokyo, Japan</div>
                </div>
                <img
                  className="arrowright-icon1"
                  alt=""
                  src={wordmark}
                />
                <div className="flight-info-information-da2">
                  <div className="code">Code</div>
                  <div className="location">City, Country</div>
                </div>
              </div>
              <div className="progress-step">
                <div className="flight-info-divider-dark">
                  <div className="divider" />
                </div>
                <div className="flight-info">
                  <div className="flight-info-inactive">
                    <div className="time-data">
                      <span>Feb 25</span>
                      <span className="span">{` | `}</span>
                      <span>7:00AM</span>
                    </div>
                    <div className="direction">Departing</div>
                  </div>
                  {/* <img className="chevron-icon" alt="" src="/chevron.svg" /> */}
                </div>
                <div className="flight-info-divider-dark">
                  <div className="divider" />
                </div>
                <div className="flight-info1">
                  <div className="time-data">
                    <span>Mar 21</span>
                    <span className="span">{` | `}</span>
                    <span>12:15PM</span>
                  </div>
                  <div className="direction">Arriving</div>
                </div>
              </div>
            </div>
            <div className="feature-lists">
              <div className="feature-list-economy">
                <img
                  className="economy-seats-icon"
                  alt=""
                  src={ecoSeats}
                />
                <div className="feature-list">
                  <div className="header-and-badge">
                    <div className="header">Economy</div>
                    <div className="badge-selected">
                      <b className="label">Selected</b>
                    </div>
                  </div>
                  <div className="description">
                    Rest and recharge during your flight with extended leg room,
                    personalized service, and a multi-course meal service
                  </div>
                  <div className="divider-thick" />
                  <div className="feature-list-bullet">
                    <img
                      className="point-heavy-icon"
                      alt=""
                      src={point}
                    />
                    <div className="bullets-of-key">
                      Built-in entertainment system
                    </div>
                  </div>
                  <div className="feature-list-bullet">
                    <img
                      className="point-heavy-icon"
                      alt=""
                      src={point}
                    />
                    <div className="bullets-of-key">
                      Complimentary snacks and drinks
                    </div>
                  </div>
                  <div className="feature-list-bullet">
                    <img
                      className="point-heavy-icon"
                      alt=""
                      src={point}
                    />
                    <div className="bullets-of-key">
                      One free carry-on and personal item
                    </div>
                  </div>
                  <div className="feature-list-bullet3">
                    <img
                      className="point-heavy-icon"
                      alt=""
                      src="/rectangle-10.svg"
                    />
                    <div className="bullets-of-key">
                      Bullets of key value for user
                    </div>
                  </div>
                  <div className="feature-list-bullet3">
                    <img
                      className="point-heavy-icon"
                      alt=""
                      src="/rectangle-10.svg"
                    />
                    <div className="bullets-of-key">
                      Bullets of key value for user
                    </div>
                  </div>
                  <div className="feature-list-bullet3">
                    <img
                      className="point-heavy-icon"
                      alt=""
                      src="/rectangle-10.svg"
                    />
                    <div className="bullets-of-key">
                      Bullets of key value for user
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature-list-economy">
                <img
                  className="economy-seats-icon"
                  alt=""
                  src={bussinesSeats}
                />
                <div className="feature-list">
                  <div className="header-and-badge1">
                    <div className="header">Business class</div>
                    <div className="badge-selected1">
                      <b className="label">Selected</b>
                    </div>
                  </div>
                  <div className="description">
                    Rest and recharge during your flight with extended leg room,
                    personalized service, and a multi-course meal service
                  </div>
                  <div className="divider-thick1" />
                  <div className="feature-list-bullet">
                    <img
                      className="point-heavy-icon"
                      alt=""
                      src={check}
                    />
                    <div className="bullets-of-key">Extended leg room</div>
                  </div>
                  <div className="feature-list-bullet">
                    <img
                      className="point-heavy-icon"
                      alt=""
                      src={check}
                    />
                    <div className="bullets-of-key">
                      First two checked bags free
                    </div>
                  </div>
                  <div className="feature-list-bullet">
                    <img
                      className="point-heavy-icon"
                      alt=""
                      src={check}
                    />
                    <div className="bullets-of-key">Priority boarding</div>
                  </div>
                  <div className="feature-list-bullet">
                    <img
                      className="point-heavy-icon"
                      alt=""
                      src={check}
                    />
                    <div className="bullets-of-key">Personalized service</div>
                  </div>
                  <div className="feature-list-bullet">
                    <img
                      className="point-heavy-icon"
                      alt=""
                      src={check}
                    />
                    <div className="bullets-of-key">
                      Enhanced food and drink service
                    </div>
                  </div>
                  <div className="feature-list-bullet">
                    <img
                      className="point-heavy-icon"
                      alt=""
                      src={check}
                    />
                    <div className="bullets-of-key">
                      Seats that recline 40% more than economy
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="navigation-footer">
              <div className="seat-selection-divider">
                <div className="divider2" />
              </div>
              <div className="content1">
                <div className="user-selections">
                  <div className="passenger-data">
                    <div className="label2">Passenger 1</div>
                    <div className="name">Sofia Knowles</div>
                  </div>
                  <div className="passenger-data1">
                    <div className="label3">Seat number</div>
                    <div className="name">--</div>
                  </div>
                </div>
                <div className="button-row">
                  <div className="button">
                    <div className="label3">Save and close</div>
                  </div>
                  <div className="button1">
                    <div className="label3">Next flight</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <img className="desktop-basic-icon" alt="" src="/desktop-basic.svg" /> */}
      </div>
    </div>
  )
}
export default PlaneBooking