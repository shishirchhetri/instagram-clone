import React from "react";
import "./navbar.css";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { IoMdHome } from "react-icons/io";
import { MdOutlineExplore, MdOutlineAddBox } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="container nav-container">
      <div className="nav-sidebar">
        <div className="nav-logo-name">
          <BsInstagram className="nav-logo" />
          <span className="logo-name">Instagram</span>
        </div>

        <div className="nav-links">
          <a href="/">
            <IoMdHome className="nav-icon" />
            <span className="nav-item">Home</span>
          </a>
          <a href="/search">
            <AiOutlineSearch className="nav-icon" />
            <div className="nav-item">Search</div>
          </a>
          <a href="/explore">
            <MdOutlineExplore className="nav-icon" />
            <span className="nav-item">Explore</span>
          </a>
          <a href="/messages">
            <RiMessengerLine className="nav-icon" />
            <span className="nav-item">Messages</span>
          </a>
          <a href="/notifictions">
            <AiOutlineHeart className="nav-icon" />
            <span className="nav-item">Notification</span>
          </a>
          <a href="/create">
            <MdOutlineAddBox className="nav-icon" />{" "}
            <span className="nav-item">Create</span>
          </a>
          <a href="/profile">
            <div className="profile ">
              <img src='./assets/img2.jpg' alt="profile" className="profile-img nav-icon" />
              <span className="nav-item">Profile</span>
            </div>
          </a>
        </div>
      </div>

      <div className="nav-end">
        <AiOutlineMenu className="nav-icon" />
        <div className="nav-item">More</div>
      </div>
    </div>
  );
};

export default Navbar;
