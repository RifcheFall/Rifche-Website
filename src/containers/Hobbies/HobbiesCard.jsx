import React from "react";
import "./HobbiesCard.css";

export default function HobbiesCard({ hobby, theme }) {
  return (
    <div
      className="hobbies-card-main"
      style={{
        border: `1px solid ${theme.shadow}`,
        borderRadius: `7px`,
        // width: `90%`,
        // margin: `10px`,
        boxShadow: `5px 5px 5px ${theme.shadow}`,
      }}
    >
      <div className="hobbies-card-image-div">
        <img
          className=""
          full
          src={new URL(`../../assests/images/${hobby.image}`, import.meta.url).href}
          alt=""
        />
      </div>
      <div className="hobbies-card-content">
        <h1 className="hobbies-card-title">{hobby.title}</h1>
        <p className="hobbies-card-text">{hobby.content}</p>
      </div>
    </div>
  );
}
