import React, { useState} from "react";
import "./nav.css";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineMenu, AiOutlineHeart } from "react-icons/ai";
import { MdOutlineExplore, MdOutlineAddBox } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { GoSearch } from "react-icons/go";
import Message from "../message/Message";
import {Link } from 'react-router-dom'


const Nav = () => {
  const [active, setActive] = useState('home');

  
  

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
            className={`${active === 'home'? "nav-item active" : "nav-item"}`}
            onClick={()=> setActive('home')}
          >
            <Link to="/">
              <AiOutlineHome className="nav-item-icon" />
              <span>Home</span>
            </Link>
          </li>


          <li className={`${active === 'search'? "nav-item active mini-nav" : "nav-item mini-nav"}`}
            onClick={()=> setActive('search')}>
            <Link to="/search">
              <GoSearch className="nav-item-icon" />
              <span>Search</span>
            </Link>
          </li>

          <li
            className={`${
              active === "explore" ? "nav-item active" : "nav-item"
            }`}
            onClick={() => {
              setActive("explore");
            }}
          >
            <Link to="/explore">
              <MdOutlineExplore className="nav-item-icon" />
              <span>Explore</span>
            </Link>
          </li>

          
          <li 
            className={`${
              active === "messages" ? "nav-item active " : "nav-item "
            }`}
            onClick={() => {
              setActive("messages");
              return <Message/>
            }}
          >
            <Link to="/messages">
              <RiMessengerLine className="nav-item-icon" />
              <span>Messages</span>
            </Link>
          </li>
          <li className={`${active === 'notification'? "nav-item active mini-nav" : "nav-item mini-nav"}`}
            onClick={()=>{
              setActive('notification');
            } }>
            <Link href="/notification">
              <AiOutlineHeart className="nav-item-icon" />
              <span>Notification</span>
            </Link>
          </li>
          <li className={`${active === 'create'? "nav-item active" : "nav-item"}`}
            onClick={()=> setActive('create')}>
            <Link href="/create">
              <MdOutlineAddBox className="nav-item-icon" />
              <span>Create</span>
            </Link>
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
