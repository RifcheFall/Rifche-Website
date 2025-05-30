import React from "react";
import "./Footer.css";
// import { Fade } from "react-reveal";
import { motion } from 'framer-motion';
import { greeting } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <p className="theme-text" style={{ color: props.theme.secondaryText }}>
          Toggle Theme
        </p>
        {/* <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          <a href="https://github.com/Tasin5541/portfolio">Get The Template</a>
        </p> */}
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
      </motion.div>
    </div>
  );
}
