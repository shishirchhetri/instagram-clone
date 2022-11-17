import React from "react";
import './profie.css'

const Profile = (props) => {
  return (
        <article className="profile-story-single">
          <div className="profile-image-wrap">
            <img src='./assets/post1.jpg' alt="post first" className="profile-story-img" />
          </div>
          <small className="profile-story-userName">{props.name}</small>
        </article>
  );
};

export default Profile;
