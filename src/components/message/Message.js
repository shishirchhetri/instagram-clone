import React, { Profiler } from 'react'
import './message.css'
import {BsChevronDown} from 'react-icons/bs'
import {BsPencilSquare} from 'react-icons/bs'
import {FiSend} from 'react-icons/fi'
import Profile from '../profile/Proifle'

const Message = () => {
  return (
    <div className="messages-container">
        <div className="messages-left">
        <div className="messages-topBar">
          <h3>laisa__ <BsChevronDown className="message-icon"/></h3>
          <BsPencilSquare className="message-icon"/>
          <hr />
        </div>

        <ul className="messages-profiles">
          <li><Profile name='friend 1' img='img1.jpg' user_details='Hello!!'/></li>
          <li><Profile name='friend 2' img='img2.jpg' user_details='where you lost??'/></li>
          <li><Profile name='friend 3' img='img3.jpg' user_details="what's up!"/></li>
          <li><Profile name='friend 4' img='img4.jpg' user_details='You there??'/></li>
          <li><Profile name='friend 5' img='img5.jpg' user_details="How's was your day?"/></li>
          <li><Profile name='friend 6' img='img6.jpg' user_details="where're you??"/></li>
          <li><Profile name='friend 7' img='img7.jpg' user_details='You arrived??'/></li>
         <li> <Profile name='friend 8' img='img8.jpg' user_details='Moving in a while'/></li>
          <li><Profile name='friend 9' img='img3.jpg' user_details="that's true"/></li>

          <li><Profile name='friend 9' img='img3.jpg' user_details="that's true"/></li>
          <li><Profile name='friend 9' img='img3.jpg' user_details="that's true"/></li>
          <li><Profile name='friend 9' img='img3.jpg' user_details="that's true"/></li>
          <li><Profile name='friend 9' img='img3.jpg' user_details="that's true"/></li>
        </ul>
        </div>

        <div className="messages-right">
        <div className="messages-right-wrap">
        <FiSend className="message-right-icon" />
        <p className='message-text'>Send private photos or messags to a friend or group</p>
        <button>Send message</button>
        </div>

        </div>
      </div>
  )
}

export default Message