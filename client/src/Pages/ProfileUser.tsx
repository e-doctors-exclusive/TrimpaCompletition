import "../styles/ClientProfil.css";
import React from "react";
import Navbar from "../Components/Navbar";
import Avatar from "../Assets/avatar.jpeg"

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
          <div className="profile_container">
            <div className="profile_img">
              <div className="avatar_container">
                <img src={Avatar} alt="" id="avatar" />
                <div className="avatar_info">
                  <p id="avatar_title">Upload a New Photo</p>
                  <p id="avatar_file_source">Profile-pic.jpg</p>
                </div>
              </div>
              <button>Update</button>
            </div>
            <div className="profile_information">
              <p>Change User Information here</p>
              <div className="username_email">
                <input type="text" placeholder="username" />
                <input type="text" placeholder="email" />
              </div>
              <input type="text" placeholder="Adress*" />
              <div className="user_info">
                <input type="text" placeholder="City" />
                <input type="text" placeholder="State/Province" />
                <input type="text" placeholder="Zip Code" />
                <input type="text" placeholder="Country" />
              </div>
              <button>Update Information</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileUser;
