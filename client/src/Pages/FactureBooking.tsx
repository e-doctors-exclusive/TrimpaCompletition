import React from 'react'
import "../styles/FactureBooking.css"

import close from "../Assets/Facture/x close no.png"
import logoAireline from "../Assets/Facture/Hawaiian Airlines.png"
import visalogo from "../Assets/Facture/visa-logo.png"
import hotel1 from "../Assets/Facture/imagehotel1.png"
import hotel2 from "../Assets/Facture/imagehotel2.png"
import hotel3 from "../Assets/Facture/imagehotel3.png"

const FactureBooking = () => {
    return (
        <div>
            <div className="tripma_tripmafacture">
                <div className="thank-you-for-container">
                    <span>{`Thank you for booking your travel with Tripma! Below is a summary of your trip to Narita airport in Tokyo, Japan. We’ve sent a copy of your booking confirmation to your email address. You can also find this page again in `}</span>
                    <span className="my-trips">My trips</span>
                    <span>.</span>
                </div>
                <div className="tripma-partners-with">
                    Tripma partners with thousands of hotels to get you the best deal. Save
                    up to 30% when you add a hotel to your trip.
                </div>
                <div className="find-events-and">
                    Find events and authentic cultrual experiences available exclusively to
                    Tripma users.
                </div>
                <b className="bon-voyage-sophia">Bon voyage, Sophia!</b>
                <b className="shop-hotels">
                    <span>{`Shop `}</span>
                    <span className="my-trips">hotels</span>
                </b>
                <b className="find-unique-experiences-container">
                    <span>{`Find unique `}</span>
                    <span className="my-trips">experiences</span>
                </b>

                <div className="confirmation-number-38102940">
                    Confirmation number: #381029404387
                </div>
                <b className="flight-summary">Flight summary</b>
                <div className="departing-february-25th">
                    Departing February 25th, 2021
                </div>
                <div className="arriving-march-21st">{`Arriving March 21st, 2021 `}</div>
                <div className="seat-4f-business">
                    Seat 4F (business, window), 1 checked bag
                </div>
                <div className="seat-9f-economy">
                    Seat 9F (economy, window), 1 checked bag
                </div>
                <div className="flight-data-row">
                    <div className="hawaiian-airlines">
                        <img className="image-25-icon" alt="" src="../Assets/Facture/Hawaiian Airlines.png" />
                    </div>
                    <div className="data-row-combined">
                        <div className="data-row-primary">
                            <div className="footer-header">16h 45m</div>
                            <div className="footer-header">7:00AM - 4:15PM</div>
                            <div className="label-3-right">1 stop</div>
                            <div className="label-3-right">$624</div>
                        </div>
                        <div className="data-row-secondary">
                            <div className="footer-header">Hawaiian Airlines</div>
                            <div className="footer-header">value</div>
                            <div className="label-3-right">2h 45m in HNL</div>
                            <div className="label-3-right">round trip</div>
                        </div>
                    </div>
                </div>
                <div className="flight-data-row1">
                    <div className="hawaiian-airlines">
                        <img className="image-25-icon" alt="" src="/image-25@2x.png" />
                    </div>
                    <div className="data-row-combined">
                        <div className="data-row-primary">
                            <div className="footer-header">16h 45m</div>
                            <div className="footer-header">7:00AM - 4:15PM</div>
                            <div className="label-3-right">1 stop</div>
                            <div className="label-3-right">$624</div>
                        </div>
                        <div className="data-row-secondary">
                            <div className="footer-header">Hawaiian Airlines</div>
                            <div className="footer-header">value</div>
                            <div className="label-3-right">2h 45m in HNL</div>
                            <div className="label-3-right">round trip</div>
                        </div>
                    </div>
                </div>

                <div className='facture-ticket' >
                    <b className="price-breakdown">Price breakdown</b>
                    <b className="payment-method">Payment method</b>
                    <div className="departing-flight-parent">
                        <div className="footer-header">Departing Flight</div>
                        <div className="div">$251.50</div>
                    </div>
                    <div className="arriving-flight-parent">
                        <div className="footer-header">Arriving Flight</div>
                        <div className="div">$251.50</div>
                    </div>
                    <div className="baggage-fees-parent">
                        <div className="footer-header">Baggage fees</div>
                        <div className="div">$0</div>
                    </div>
                    <div className="seat-upgrade-business-parent">
                        <div className="footer-header">Seat upgrade (business)</div>
                        <div className="div">$199</div>
                    </div>
                    <div className="subtotal-parent">
                        <div className="footer-header">Subtotal</div>
                        <div className="div">$702</div>
                    </div>
                    <div className="taxes-94-parent">
                        <div className="footer-header">Taxes (9.4%)</div>
                        <div className="div">$66</div>
                    </div>
                    <div className="rectangle-parent">
                        <div className="frame-child" />
                        <div className="amount-paid-parent">
                            <div className="amount-paid">Amount paid</div>
                            <div className="div6">$768</div>
                        </div>
                    </div>


                    <div className="frame-child" />
                </div>
                <div className="credit-card">
                    <div className="name">Sophia Knowles</div>
                    <div className="card-number">
                        <span className="span">••••••••••••</span>
                        <span className="span1">3456</span>
                    </div>
                    <div className="expiration-date">10/23</div>
                    <img className="logo-icon" alt="" src={visalogo} />
                </div>
                <b className="flight-route">Flight Route</b>
                <div className="map">
                    <img className="map-child" alt="" src="/vector-16.svg" />
                    <img className="map-item" alt="" src="/group-7@2x.png" />
                    <div className="map-inner" />
                    <div className="ellipse-div" />
                    <b className="sfo">SFO</b>
                    <b className="nrt">NRT</b>
                    <img className="vector-icon" alt="" src="/vector.svg" />
                </div>
                <div className="button">
                    <div className="copyright">Shop all hotels</div>
                </div>
                <div className="button1">
                    <div className="copyright">View all experiences</div>
                </div>
                <div className="you-can-email">
                    You can email your itinerary to anyone by entering their email address
                    here.
                </div>
                <b className="share-your-travel">Share your travel itinerary</b>
                <div className="button2">
                    <button className='btnEmail' >Email itenerary</button>
                </div>
                <div className="button3">
                    <button className='btnAddanother' >Add another</button>
                </div>
                <div className="text-input">

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="emailBtn1">Email address</span>
                        <input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="emailBtn1" />
                    </div>

                    <div className="helper-text">
                        <div className="copyright">Helper text</div>
                    </div>
                </div>
                <div className="text-input1">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="emailBtn2">Email address</span>
                        <input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="emailBtn2" />
                    </div>
                    <div className="helper-text">
                        <div className="copyright">Helper text</div>
                    </div>
                </div>
                <div className="text-input2">

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="emailBtn3">Email address</span>
                        <input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="emailBtn3" />
                    </div>

                </div>
                <div className="card-full-card">
                    <img className="image-icon" alt="" src={hotel2} />
                    <div className="data">
                        <div className="title-row">
                            <div className="amount-paid">Bessho SASA</div>
                            <div className="price">$529</div>
                        </div>
                        <div className="description">
                            Japanese ryokan with private onsen bath
                        </div>
                    </div>
                </div>
                <div className="card-full-card1">
                    <img className="image-icon" alt="" src={hotel1} />
                    <div className="data">
                        <div className="title-row">
                            <div className="amount-paid">Ryokan Japan</div>
                            <div className="price">$439</div>
                        </div>
                        <div className="description">
                            Enjoy views of the garden from your room
                        </div>
                    </div>
                </div>
                <div className="card-full-card2">
                    <img className="image-icon" alt="" src="/image2@2x.png" />
                    <div className="data">
                        <div className="title-row">
                            <div className="amount-paid">9 Hours Shinjuku</div>
                            <div className="price">$59</div>
                        </div>
                        <div className="description">
                            A convenient capsule hotel at Shinjuku station
                        </div>
                    </div>
                </div>
                <div className="card-full-card2">
                    <img className="image-icon" alt="" src="./dqsd.png" />
                    <div className="data">
                        <div className="title-row">
                            <div className="amount-paid">9 Hours Shinjuku</div>
                            <div className="price">$59</div>
                        </div>
                        <div className="description">
                            A convenient capsule hotel at Shinjuku station
                        </div>
                    </div>
                </div>
                <div className="card-full-card4">
                    <img className="image-icon" alt="" src="/image3@2x.png" />
                    <div className="data">
                        <div className="title-row">
                            <div className="amount-paid">Nihon Kimono</div>
                            <div className="price">$89</div>
                        </div>
                        <div className="description">
                            Wear the national dress of Japan around the city
                        </div>
                    </div>
                </div>
                <div className="card-full-card5">
                    <img className="image-icon" alt="" src="/image4@2x.png" />
                    <div className="data">
                        <div className="title-row">
                            <div className="amount-paid">teamLab Borderless</div>
                            <div className="price">$39</div>
                        </div>
                        <div className="description">
                            A modern sensory experience of light and sound
                        </div>
                    </div>
                </div>
                <div className="card-full-card6">
                    <img className="image-icon" alt="" src={hotel3} />
                    <div className="data">
                        <div className="title-row">
                            <div className="footer-header">
                                <span className="hotel-the-flag">HOTEL THE FLAG</span>
                                <span className="span2"> 大阪市</span>
                            </div>
                            <div className="price">$139</div>
                        </div>
                        <div className="description">Modern hotel in the heart of Osaka</div>
                    </div>
                </div>
                <div className="success">
                    <div className="base-callout">
                        <div className="copyright">
                            Your flight has been booked successfully! Your confirmation number
                            is #381029404387
                        </div>
                        <img className="x-close-no" alt="" src={close} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FactureBooking