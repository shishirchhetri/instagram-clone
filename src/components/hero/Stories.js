import React from "react";

const Stories = () => {
  const module = require("./heroData");
  const hero = module.hero;
  return (
    <section className="stories-container">
      <div className="story-profiles">
        {hero.map((item) => {
          return (
            <article key={item.id} className="story-single">
              <div className="image-wrap">
                {" "}
                <img src={item.cover} alt="post first" className="story-img" />
              </div>
              <small className="story-userName">{item.name}</small>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Stories;
