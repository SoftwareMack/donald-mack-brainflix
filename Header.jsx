
import React from 'react';
import './Header.scss'
import logo from '../../assets/logo/BrainFlix-logo.svg';
import profilePic from "../../assets/images/Mohan-muruge.jpg";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="BrainFlix logo" className="header__logo" />

      <div className="header__container">
        <input
          type="text"
          placeholder="Search"
          className="header__container__input"
        ></input>
        <img
          src={profilePic}
          alt="Profile Avatar"
          className="header__container__picture--mobile"
        />
      </div>
      
    </header>
  );
}

export default Header;
