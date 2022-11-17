import React from "react";
import "./hero.css";
import Stories from "./Stories";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { TbSend } from "react-icons/tb";
import Profile from "../profile/Proifle";

const Hero = () => {
  return (
    <main className="hero-container">
      <Stories />
      <section className="hero">
        <div className="posts">
          <div className="single-post">
            <Profile name="name" />
            <div className="post-content">
              <img src='./assets/post1.jpg' className='post-image' alt="" />
              <div className="post-details">
                <div className="post-likes">
                  <AiOutlineHeart className="post-icons" />
                  <FaRegComment className="post-icons" />
                  <TbSend className="post-icons" />
                </div>
                <div className="post-caption">
                  <p>
                    <strong>userName</strong>
                    <span className="caption-text">This is this</span>
                  </p>
                </div>

                <div className="post-comments">
                  <strong>View comments</strong>
                </div>
                <div className="post-time">
                  <small className="light">9 min ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
