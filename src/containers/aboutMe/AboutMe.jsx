import React from "react";
import "./AboutMe.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { aboutMe } from "../../portfolio";
// import { Fade } from "react-reveal";
import { motion } from 'framer-motion';

export default function AboutMe(props) {
  const theme = props.theme;
  console.log(props);
  console.log(theme.text);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="about-main" id="aboutMe">
        <div className="aboutMe-main">
          <div className="aboutMe-image-div">
            <img
              className="show-on-desktop"
              src={new URL(`../../assests/images/stand2.JPG`, import.meta.url).href}
              alt=""
            />
          </div>
          <div className="aboutMe-text-div">
            <h1 className="aboutMe-text">About Me</h1>
            <div className="aboutMe-image-div">
              <img
                className="show-on-mobile"
                src={new URL(`../../assests/images/stand2.JPG`, import.meta.url).href}
                alt=""
              />
            </div>
            <p className="aboutMe-text-content">{aboutMe.content}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
