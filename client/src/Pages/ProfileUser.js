import "../styles/ClientProfil.css";
import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Avatar from "../Assets/avatar.jpeg";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { CloudinaryContext, Image } from "cloudinary-react";

const ProfileUser = () => {
  const { user } = useSelector((state) => state.user);
  const [form, setForm] = useState({
    name: user.name,
    email: user.email,
    password: user.password,
    phone: user.phone,
    adress: user.adress,
    city: user.city,
    state: user.state,
    country: user.country,
    zip: user.zip,
    image: user.image,
  });
  // console.log(user);
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    console.log(formData);
    formData.append("upload_preset", "vhhtdlm3");
    const response = await axios
      .post("https://api.cloudinary.com/dh8ogvcuy/image/upload", formData)
      .catch((err) => {
        console.log(err);
      });
    console.log(response);
    setForm({ ...form, image: response.data.secure_url });
  };

  const handleUpdate = async (form) => {
    await axios
      .put(`http://localhost:1128/users/update/${user.id}`, form)
      .then((response) => console.log(response));
  };
  return (
    <>
      <Navbar />

      <div className="userProfile_main_container">
        <div className="userProfile_container">
          <div className="profile_side_nav">
            <div className="side_nav_card">
              <p className="account_seeting_title">Account Setting</p>
              <p className="account_seeting_desc">
                Details about your Personal information
              </p>
            </div>
            <div className="side_nav_card">
              <p className="account_seeting_title">User checkout</p>
              <p className="account_seeting_desc">
                Details about your Payment transactions
              </p>
            </div>
            <div className="side_nav_card">
              <p className="account_seeting_title">Password & Security</p>
              <p className="account_seeting_desc">
                Details about your Personal information
              </p>
            </div>
          </div>
          <div className="profile_container">
            <CloudinaryContext cloudName="dh8ogvcuy" apiKey="668422817968224">
              <div className="profile_img">
                <div className="avatar_container">
                  <Image id="avatar" publicId={form.image || Avatar} />
                  <div className="avatar_info">
                    <p id="avatar_title">Upload a New Photo</p>
                    <p id="avatar_file_source">Profile-pic.jpg</p>
                  </div>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  placeholder="Update"
                />
              </div>
            </CloudinaryContext>
            <div className="profile_information">
              <p>Change User Information here</p>
              <div className="username_email">
                <input
                  type="text"
                  placeholder="username"
                  defaultValue={user.name}
                  onChange={(e) => {
                    setForm({ ...form, name: e.target.value });
                  }}
                />
                <input
                  type="text"
                  placeholder="email"
                  defaultValue={user.email}
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                  }}
                />
              </div>
              <input
                type="text"
                placeholder="Adress*"
                defaultValue={user.adress}
                onChange={(e) => {
                  setForm({ ...form, adress: e.target.value });
                }}
              />
              <div className="user_info">
                <input
                  type="text"
                  placeholder="City"
                  defaultValue={user.city}
                  onChange={(e) => {
                    setForm({ ...form, city: e.target.value });
                  }}
                />
                <input
                  type="text"
                  placeholder="State/Province"
                  defaultValue={user.state}
                  onChange={(e) => {
                    setForm({ ...form, state: e.target.value });
                  }}
                />
                <input
                  type="number"
                  placeholder="Zip Code"
                  defaultValue={user.zip}
                  onChange={(e) => {
                    setForm({ ...form, zip: parseInt(e.target.value) });
                  }}
                />
                <input
                  type="text"
                  placeholder="Country"
                  defaultValue={user.country}
                  onChange={(e) => {
                    setForm({ ...form, country: e.target.value });
                  }}
                />
              </div>
              <button
                onClick={() => {
                  handleUpdate(form);
                  toast.success("Update Successfully");
                }}
              >
                Update Information
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileUser;
