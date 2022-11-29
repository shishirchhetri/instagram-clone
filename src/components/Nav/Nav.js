import React, { useState } from "react";
import "./nav.css";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineMenu, AiOutlineHeart } from "react-icons/ai";
import { MdOutlineExplore, MdOutlineAddBox } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { GoSearch } from "react-icons/go";
import Profile from "../profile/Proifle";

const Nav = () => {
  const [active, setActive] = useState(false);
  const [link, setLink] = useState("#");

  function activeNav() {
    setActive((pre) => !pre);
  }

  return (
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
          <li className="nav-item">
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
          <li className="nav-item">
            <a href="#nitification">
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

          <li className="nav-item">
            <a href="#create">
              <Profile img='img2.jpg'/> <span>Profile</span>
            </a>
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
  );
};

export default Nav;
