import "../styles/ClientProfil.css";
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ProfileUser: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="userProfile_main_container">
        <div className="userProfile_container">
          <div className="profile_side_nav">
            <div className="side_nav_card">
              <p className="account_seeting_title">Account Setting</p>
              <p className="account_seeting_desc">Details about your Personal information</p>
            </div>
            <div className="side_nav_card">
              <p className="account_seeting_title">User checkout</p>
              <p className="account_seeting_desc">Details about your Payment transactions</p>
            </div>
            <div className="side_nav_card">
              <p className="account_seeting_title">Password & Security</p>
              <p className="account_seeting_desc">Details about your Personal information</p>
            </div>
          </div>
          <div className="profile_container"></div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default ProfileUser;
