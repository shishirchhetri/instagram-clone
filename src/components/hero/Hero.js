import React from "react";
import "./hero.css";
import Stories from "./Stories";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { TbSend } from "react-icons/tb";
import Profile from "../profile/Proifle";
import Footer from "../footer/Footer";
const module = require('./postData.js');
const posts = module.posts;

const Hero = () => {
  return (
    <main className="hero-container">
      

      <section className="hero">
        <div className="posts">
        <Stories />
          {
            posts.map(post =>{
              return(
                <div key={post.id} className="single-post">
            <div className="post-profile"> <Profile name={post.userName} img={post.img}/></div>

              <img src={`./assets/${post.img}`}   alt="post" className="image-post"  />
 
              
              <div className="post-details user-data">
                <div className="post-likes">
                  <AiOutlineHeart className="post-icons" />
                  <FaRegComment className="post-icons" />
                  <TbSend className="post-icons" />
                </div>
                <div className="post-likes">
                  <strong className="light">{post.likes}</strong>
                </div>
                <div className="post-caption">
                  <p>
                    <strong> {post.userName}</strong>
                    <span className="caption-text"> {post.caption}</span>
                  </p>
                </div>

                <div className="post-comments">
                  <span className="light">View all comments</span>
                </div>
                <div className="post-time">
                  <small className="light">{post.time}</small>
                </div>
              </div>
          </div>
              )
            })
          }
        </div>


          <div className="post-sidebar">
            <div className="sidebar-profile">
            <Profile name="Lalisa" user_details="__lisa"img="img2.jpg"/>
            <h5>Switch</h5>
            </div>

            <div className="post-sidebar-container">
              <div className="sidebar-title">
              <h4 className="light">
                Suggestions for you
              </h4>
              <h5>See All</h5>
              </div>

              <div className="sidebar-content">
                <div className="sidebar-user">
                <Profile name="Sandhya" user_details="New to instagram" img="img1.jpg"/>
                <h5>Follow</h5>
                </div>

                <div className="sidebar-user">
                <Profile name="Sandhya" user_details="New to instagram" img="img2.jpg"/>
                <h5>Follow</h5>
                </div>

                <div className="sidebar-user">
                <Profile name="Sandhya" user_details="Followed by sandhya and 5 others" img="img6.jpg"/>
                <h5>Follow</h5>
                </div>

                <div className="sidebar-user">
                <Profile name="Sandhya" user_details="New to instagram" img="img4.jpg"/>
                <h5>Follow</h5>
                </div>

                <div className="sidebar-user">
                <Profile name="Sandhya" user_details="New to instagram" img="img7.jpg"/>
                <h5>Follow</h5>
                </div>
              </div>
            </div>
            <Footer/>
          </div>

      </section>
    </main>
  );
};

export default Hero;
