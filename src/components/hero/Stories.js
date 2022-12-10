import React, { useRef } from "react";
import {BiRightArrowCircle} from 'react-icons/bi'

const Stories = () => {
  const module = require("./heroData");
  const hero = module.hero;

  const storiesRef = useRef(null);
  function scroll(){
    storiesRef.scrollX +=20;
  }


  return (
    <section className="stories-container" ref={storiesRef}>
      <div className="story-profiles">
        {hero.map((item) => {
          return (
            <article key={item.id} className="story-single">
              <div className="image-wrap">
                <img src={`./assets/${item.cover}`} alt="post first" className="story-img" />
              </div>
              <small className="story-userName">{item.name}</small>
              
            </article>
            
          );
        })}

      </div>
      <BiRightArrowCircle onClick={scroll} className="stories-arrow"/>
    </section>
  );
};

export default Stories;
