import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting, socialMediaLinks } from "../../portfolio";
import { motion } from 'framer-motion';
import FeelingProud from "./FeelingProud";
import photoImg from "../../assests/images/newpf.png";

export default function Greeting(props) {
  const theme = props.theme;
  console.log(props);
  console.log(theme.text);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              {greeting.nickname ? (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  ( {greeting.nickname} )
                </h2>
              ) : null}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <div className="greeting-image-div">
                <img
                  className="show-on-mobile"
                  src={photoImg}
                  alt=""
                />
              </div>
              <p
                className="greeting-text-content subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subContent}
              </p>
              <SocialMedia theme={theme} links={socialMediaLinks} />
              <div className="button-greeting-div">
                <Button
                  text="See My Resume"
                  newTab={true}
                  href={greeting.resumeLink}
                  theme={theme}
                  className="portfolio-repo-btn"
                  style={{ marginLeft: "1rem" }}
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <img
              className="show-on-desktop"
              src={photoImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
