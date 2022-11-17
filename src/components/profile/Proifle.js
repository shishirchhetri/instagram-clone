import React from "react";
import img1 from "../../assets/img1.jpg";
import './profie.css'

const Profile = (props) => {
  return (
        <article className="profile-story-single">
          <div className="profile-image-wrap">
            <img src={img1} alt="post first" className="profile-story-img" />
          </div>
          <small className="profile-story-userName">{props.name}</small>
        </article>
  );
};

export default Profile;
