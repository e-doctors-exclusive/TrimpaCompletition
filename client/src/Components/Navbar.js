import "../styles/Navbar.css";
import "../styles/SignUp.css";
import React, { useState ,useEffect } from "react";
import logo from "./Logo";
import Logo from "./Logo";
import SignUp from "../Pages/SignUp";
import SignInModal from "../Pages/SignIn";
import googleIcon from "../Assets/icons/thirdPartyIcons/color.svg";
import appleIcon from "../Assets/icons/thirdPartyIcons/appleMac.svg";
import facebookIcon from "../Assets/icons/thirdPartyIcons/facebook.svg";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser, logout, setLoggedIn } from "../store/userSlicer";

const Navbar = () => {
  const [isSignInModalOpen, setSignInModalOpen] = useState(false);
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    phomail: "",
    password: "",
  });
  const [checks, setChecks] = useState({ c1: false, c2: false });
  const { user } = useSelector((state) => {
    return state.user;
  });

  const handleCreate = async (form) => {
    // conso  le.log(form);
    await axios
      .post("http://localhost:1128/users/signup", form)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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

  const handleSignIn = async (email, password) => {
    if (Number.isNaN(+email)) {
      await axios
        .post("http://localhost:1128/users/login", { email, password })
        .then((res) => {
          console.log(res.data.user.dataValues);
          dispatch(setUser(res.data.user.dataValues))
          dispatch(setLoggedIn({loggedIn: true, token:res.data.user.dataValues.token})); 
          console.log(user);
        })
        .catch((e) => console.log(e));
    } else {
      await axios
        .post("http://localhost:1128/users/login", {
          phone: parseInt(email),
          password,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((e) => console.log(e));
    }
  };

  useEffect(() => {

  },[user])
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
          <li onClick={openSignInModal}>Sign in</li>
        </ul>
        <button className="Sign-up" onClick={openSignUpModal}>
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
              <input
                type="text"
                placeholder="Email or phone number"
                onChange={(e) => {
                  setForm({ ...form, phomail: e.target.value });
                }}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setForm({ ...form, password: e.target.value });
                }}
              />
            </div>
            <div className="term_conditions">
              <div className="term_of_condition">
                <input
                  type="checkbox"
                  onClick={() => {
                    setChecks({ ...checks, c1: !checks.c1 });
                  }}
                />
                <p>
                  I agree to the <span>terms and conditions</span>
                </p>
              </div>
              <div className="term_of_condition">
                <input
                  type="checkbox"
                  onClick={() => {
                    setChecks({ ...checks, c2: !checks.c2 });
                  }}
                />
                <p>Send me the latest deal alerts</p>
              </div>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                if (Number.isNaN(+form.phomail)) {
                  handleCreate({
                    email: form.phomail,
                    password: form.password,
                  });
                } else {
                  handleCreate({
                    phone: parseInt(form.phomail),
                    password: form.password,
                  });
                }
              }}
            >
              Create account
            </button>
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
