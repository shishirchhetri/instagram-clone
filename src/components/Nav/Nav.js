import React, { useState} from "react";
import "./nav.css";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineMenu, AiOutlineHeart } from "react-icons/ai";
import { MdOutlineExplore, MdOutlineAddBox } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { GoSearch } from "react-icons/go";

const Nav = () => {
  const [active, setActive] = useState(false);
  const [link, setLink] = useState("#");

  function activeNav() {
    setActive((pre) => !pre);
  }

  return (
<div className="sidebar-container">


    <div className="nav-mobile">
          <div className="nav-mobile-logo">
            <h2>Instagram</h2>
          </div>

          <div className="nav-mobile-icons">
          <div className="nav-mobile-search">
            <input className="mobile-search" type="text" id="mobile-search" placeholder="search..." />
            <label htmlFor="mobile-search"><GoSearch className="mobile-search-icon" /></label>
          </div>
    <div className="nav-mobile-notification">
    <AiOutlineHeart className="mobile-notification-icon" />
    </div>
          </div>

        </div>


    <div id="sidebar">
      <div className="logo">
        <BsInstagram className="logo-img" />
        <h3>InstaGram</h3>

        
      </div>
      

      <nav>
        
        <ul className="nav-items">
          <li
            className={`${active ? "nav-item active" : "nav-item"}`}
            onClick={activeNav}
          >
            <a href="# ">
              <AiOutlineHome className="nav-item-icon" />
              <span>Home</span>
            </a>
          </li>
          <li className="nav-item mini-nav">
            <a href="#search">
              <GoSearch className="nav-item-icon" />
              <span>Search</span>
            </a>
          </li>
          <li
            className={`${
              link === "#explore" ? "nav-item active" : "nav-item"
            }`}
            onClick={() => {
              activeNav();
              setLink("#explore");
            }}
          >
            <a href="#explore">
              <MdOutlineExplore className="nav-item-icon" />
              <span>Explore</span>
            </a>
          </li>

          
          <li
            className={`${
              link === "#messages" ? "nav-item active" : "nav-item"
            }`}
            onClick={() => {
              activeNav();
              setLink("#messages");
            }}
          >
            <a href="#messages">
              {" "}
              <RiMessengerLine className="nav-item-icon" />
              <span>Messenges</span>
            </a>
          </li>
          <li   className="nav-item mini-nav">
            <a href="#notification">
              <AiOutlineHeart className="nav-item-icon" />
              <span>Notification</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#create">
              <MdOutlineAddBox className="nav-item-icon" />
              <span>Create</span>
            </a>
          </li>

          <li className="nav-item nav-item-profile">
          <div className="profile ">
                <img
                  src="./assets/img2.jpg"
                  alt="profile"
                  className="profile-img nav-icon"
                />
                <span className="nav-item">Profile</span>
                </div>
          </li>
        </ul>


        <ul className="sidebar-end">
          <li className="nav-item">
            <AiOutlineMenu className="nav-item-icon" />
            <span>More</span>
          </li>
        </ul>
      </nav>
    </div>
    </div>
  );
};

export default Nav;
