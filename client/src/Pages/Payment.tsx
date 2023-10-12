import "../styles/Payment.css";
import React from "react";
import icon1 from "../Assets/icons/PaymentPage-icons/credit card.svg";
import icon5 from "../Assets/icons/PaymentPage-icons/flousi.svg";
import information from "../Assets/icons/PaymentPage-icons/information.svg";
import googleIcon from "../Assets/icons/thirdPartyIcons/color.svg";
import appleIcon from "../Assets/icons/thirdPartyIcons/appleMac.svg";
import facebookIcon from "../Assets/icons/thirdPartyIcons/facebook.svg";
import BagIllustration from "../Assets/Illustration.png";
import logoIllustration from "../Assets/logoIllustration.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

interface PaymentProps {}

const Payment: React.FC<PaymentProps> = () => {
  return (
    <>
    <Navbar />
      <div className="payment_main_container">
        <div className="payment_container">
          <div className="payment_methods">
            <div className="payment_method_title">
              <p>Payment method</p>
              <p>
                Select a payment method below. Tripma processes your payment
                securely with end-to-end encryption.
              </p>
            </div>
            <ul className="payment_methods_creditCard">
              <li>
                <img src={icon1} alt="" />
                <p>Credit card</p>
              </li>
              <li>
                <img id="flousi_icon" src={icon5} alt="" />
                <p>Flousi</p>
              </li>
            </ul>
            <div className="payment_methods_creditCard_details">
              <p>Credit card details</p>
              <div className="payment_methods_billing_adress_check">
                <label>
                  <input type="checkbox" />
                </label>
                <p>Billing address is same as Passenger 1 </p>
              </div>
              <input type="text" placeholder="Name on card" />
              <input type="text" placeholder="Card number" />
              <div className="exp-ccv-inputs">
                <div className="exp">
                  <input type="text" placeholder="Expiration date" />
                  <p>MM/YY</p>
                </div>
                <div className="ccv">
                  <input type="text" placeholder="CCV" />
                  <img src={information} alt="" />
                </div>
              </div>
            </div>
            <div className="payment_methods_createAccount">
              <div className="payment_methods_createAccount_inputs">
                <p>Create an account</p>
                <p>
                  Tripma is free to use as a guest, but if you create an account
                  today, you can save and view flights, manage your trips, earn
                  rewards, and more.
                </p>
                <div className="payment_methods_createAccount_check">
                  <input type="checkbox" />
                  <p>Save card and create account for later</p>
                </div>
                <input
                  type="text"
                  placeholder="Email address or phone number"
                />
                <input type="text" placeholder="Password" />
              </div>
              <div className="payment_methods_createAccount_dividers">
                <div className="divider_lines" />
                <p>or</p>
                <div className="divider_lines" />
              </div>
              <div className="payment_methods_createAccount_third_party_auth">
                <div className="payment_third_party_btn">
                  <img id="firstImg" src={googleIcon} alt="" />
                  <p>Continue with Google</p>
                </div>
                <div className="payment_third_party_btn">
                  <img id="secondtImg" src={appleIcon} alt="" />
                  <p>Continue with Apple</p>
                </div>
                <div className="payment_third_party_btn">
                  <img id="thirdtImg" src={facebookIcon} alt="" />
                  <p>Continue with Facebook</p>
                </div>
              </div>
            </div>
            <div className="payment_methods_privacyPolicy">
              <div className="cancellation_policy">
                <p>Cancellation policy</p>
                <p>
                  This flight has a flexible cancellation policy. If you cancel
                  or change your flight up to 30 days before the departure date,
                  you are eligible for a free refund. All flights booked on
                  Tripma are backed by our satisfaction guarantee, however
                  cancellation policies vary by airline. See the{" "}
                  <span>full cancellation policy</span> for this flight.
                </p>
              </div>
              <div className="payment_methods_privacyPolicy_btns">
                <button>Back to seat select</button>
                <button>Confirm and pay</button>
              </div>
            </div>
          </div>
          <div className="bills-trips">
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
                  <p className="trip_seatPricing">Seat upgrade</p>
                  <p>Subtotal</p>
                  <p>Taxes and Fees</p>
                  <p>Total</p>
                </div>
                <div className="prices">
                  <p className="trip_seatPricing">$199</p>
                  <p>$702</p>
                  <p>$66</p>
                  <p>$768</p>
                </div>
              </div>
              <button>Select seats</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
