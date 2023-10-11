import "../styles/Navbar.css";
import "../styles/SignUp.css";
import React, { useState }      from "react";
import logo                     from "../Components/Logo";
import Logo                     from "../Components/Logo";
import SignUp                   from "../Pages/SignUp";
import SignIn                   from "../Pages/SignIn";
import googleIcon               from "../Assets/icons/thirdPartyIcons/color.svg";
import appleIcon                from "../Assets/icons/thirdPartyIcons/appleMac.svg";
import facebookIcon             from "../Assets/icons/thirdPartyIcons/facebook.svg";

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <Logo />
      </div>
      <div className="nav_right">
        <ul className="navigo">
          <li>Flights</li>
          <li>Hotels</li>
          <li>Packages</li>
          <li onClick={openModal}>Sign in</li>
        </ul>
        <button className="Sign-up" onClick={openModal}>
          Sign up
        </button>
      </div>
      {/* <SignIn isOpen={isModalOpen} onClose={closeModal} />  */}
      <SignUp isOpen={isModalOpen} onClose={closeModal}>
        <form className="main_signUp_container">
          <div className="signUp_header">
            <div className="signUp_desc">
              <p id="signUp_title">Sign up for Tripma</p>
              <p id="signUp">
                Tripma is totally free to use. Sign up using your email address
                or phone number below to get started.
              </p>
            </div>
            <div className="labels">
              <input type="text" placeholder="Email or phone number" />
              <input type="password" placeholder="Password" />
            </div>
            <div className="term_conditions">
              <div className="term_of_condition" >
                <input type="checkbox" />
                <p>
                  I agree to the <span>terms and conditions</span>
                </p>
              </div>
              <div className="term_of_condition" >
                <input type="checkbox" />
                <p>Send me the latest deal alerts</p>
              </div>
            </div>
            <button>Create account</button>
          </div>
          <div className="separation_line">
            <div className="divider"></div> 
            <p>or</p>
            <div className="divider"></div>
          </div>
          <div className="third_party_auth">
            <div className="third_party_btn">
              <img src={googleIcon} alt="" />
              <p>Continue with Google</p>
            </div>
            <div className="third_party_btn">
              <img src={appleIcon} alt="" />
              <p>Continue with Apple</p>
            </div>
            <div className="third_party_btn">
              <img src={facebookIcon} alt="" />
              <p>Continue with Facebook</p>
            </div>
          </div>
        </form>
      </SignUp>
    </div>
  );
};

export default Navbar;
