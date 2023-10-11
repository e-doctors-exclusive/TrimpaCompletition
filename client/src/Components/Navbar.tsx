import "../styles/Navbar.css";
import React, { useState } from "react";
import logo from "../Components/Logo";
import Logo from "../Components/Logo";
import SignUp from "../Pages/SignUp";

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
          <li>Sign in</li>
        </ul>
        <button className="Sign-up" onClick={openModal}>
          Sign up
        </button>
      </div>
      <SignUp isOpen={isModalOpen} onClose={closeModal}>
        
      </SignUp>
    </div>
  );
};

export default Navbar;
