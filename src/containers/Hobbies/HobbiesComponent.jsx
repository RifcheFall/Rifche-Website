import React from "react";
import "./HobbiesComponent.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { hobbies } from "../../portfolio";
// import { Fade } from "react-reveal";
import { motion } from 'framer-motion';
import HobbiesCard from "./HobbiesCard";

export default function HobbiesComponent(props) {
  const theme = props.theme;
  console.log(props);
  console.log(theme.text);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="hobbies-basic" id="hobbies">
        <div className="hobbies-main">
          <h1 className="hobbies-title">Hobbies and Interests</h1>
          {/* <div className="hobbies-image-div">
            <img
              className=""
              src={new URL(`../../assests/images/stand2.JPG`, import.meta.url).href}
              alt=""
            />
          </div> */}
          {/* <div className="hobbies-text-div">
            
            <p className="hobbies-text-content">{hobbies.content}</p>
          </div> */}
          {hobbies.hobbies.map((hobby) => (
            <HobbiesCard hobby={hobby} theme={theme} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
