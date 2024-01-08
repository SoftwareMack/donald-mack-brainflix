
import React from 'react';
import './Header.scss'
import logo from '../../assets/logo/BrainFlix-logo.svg';
import profilePic from "../../assets/images/Mohan-muruge.jpg";
//import { Link } from "react-router-dom";


import { Link } from "react-router-dom";



function Header() {
  return (
    <>
      <header className="header">
        <div className="header-wrapper">
          <Link to={'/'}>
            <img className="header-wrapper__logo" src={logo} alt="" />
          </Link>
        </div>

        <div className="search-section">
          <div className="search-section-wrapper">
            <label>
              <input type='text' className="search-section-wrapper__input" placeholder="Search" />
            </label>
            <Link to={'upload'}>
              <button className="search-section__button-tablet">UPLOAD</button>
            </Link>
            <img className="search-section-wrapper__user" src={profilePic} alt="" />
          </div>

          <Link to={'upload'}>
            <button className="search-section__button">UPLOAD</button>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
