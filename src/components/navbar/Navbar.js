import React from "react";
import "./navbar.css";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { IoMdHome } from "react-icons/io";
import { MdOutlineExplore, MdOutlineAddBox } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Explore from "../explore/Explore";
import Search from "../userProfile/UserProfile";
import Message from "../message/Message";
import Notifications from "../notifications/Notifications";
import UserProfile from "../userProfile/UserProfile";


const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-sidebar">
        <div className="nav-logo-name">
          <BsInstagram className="nav-logo" />
          <span className="logo-name">Instagram</span>
        </div>

        <div className="nav-links">
          <BrowserRouter>
            <Link to="/">
              <IoMdHome className="nav-icon" />
              <span className="nav-item ">Home</span>
            </Link>

            <Link to="/search">
              <AiOutlineSearch className="nav-icon small-nav" id="search" />
              <div className="nav-item">Search</div>
            </Link>

            <Link to="/explore">
              <MdOutlineExplore className="nav-icon" />
              <span className="nav-item">Explore</span>
            </Link>

            <Link to="/messages">
              <RiMessengerLine className="nav-icon" />
              <span className="nav-item">Messages</span>
            </Link>

            <Link to="/notifictions">
              <AiOutlineHeart
                className="nav-icon small-nav"
                id="notification"
              />
              <span className="nav-item">Notification</span>
            </Link>

            <Link to="/create">
              <MdOutlineAddBox className="nav-icon" />
              <span className="nav-item">Create</span>
            </Link>

            <Link to="/userProfile">
              <div className="profile ">
                <img
                  src="./assets/img2.jpg"
                  alt="profile"
                  className="profile-img nav-icon"
                />
                <span className="nav-item">Profile</span>
              </div>
            </Link>

            <Routes>
              <Route path="/search" element={<Search />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/message" element={<Message />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/userProfile" element={<UserProfile />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>

      <div>
        <a href="# " className="nav-end">
          <AiOutlineMenu className="nav-icon" />
          <div className="nav-item">More</div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
