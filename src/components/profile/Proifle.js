import React from "react";
import './profie.css'


const Profile = (props) => {
  return (
        <article className="profile-story-single">
          <div className="profile-image-wrap">
            <img src={`./assets/${props.img}`} alt="post first" className="profile-story-img" />
          </div>
          <div className="profile-story-userName-details">
            <strong className="profile-story-userName ">{props.name}</strong>
            <small className="light">{props.user_details}</small></div>
        </article>
  );
};

export default Profile;
