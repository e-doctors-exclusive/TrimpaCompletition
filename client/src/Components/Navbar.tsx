import "../styles/Navbar.css";
import "../styles/SignUp.css";
import React, { useState }      from "react";
import logo                     from "../Components/Logo";
import Logo                     from "../Components/Logo";
import SignUp                   from "../Pages/SignUp";
import SignInModal              from "../Pages/SignIn";
import googleIcon               from "../Assets/icons/thirdPartyIcons/color.svg";
import appleIcon                from "../Assets/icons/thirdPartyIcons/appleMac.svg";
import facebookIcon             from "../Assets/icons/thirdPartyIcons/facebook.svg";

const Navbar = () => {
  const [isSignInModalOpen, setSignInModalOpen] = useState(false);
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);

  const openSignInModal = () => {
    setSignInModalOpen(true);
  };

  const closeSignInModal = () => {
    setSignInModalOpen(false);
  };

  const openSignUpModal = () => {
    setSignUpModalOpen(true);
  };

  const closeSignUpModal = () => {
    setSignUpModalOpen(false);
  };

  const handleSignIn = (email: string, password: string) => {
    console.log('Sign-in attempt with email:', email, 'and password:', password);
    // closeSignInModal();
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
          <li onClick={openSignInModal} >Sign in</li>
        </ul>
        <button className="Sign-up"onClick={openSignUpModal}>
          Sign up
        </button>
      </div>

      <SignUp isOpen={isSignUpModalOpen} onClose={closeSignUpModal}>
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
      <SignInModal
        isOpen={isSignInModalOpen}
        onClose={closeSignInModal}
        title="Sign In"
        description="Please enter your email and password to sign in."
        onSignIn={handleSignIn}
      />
    </div>
  );
};

export default Navbar;
