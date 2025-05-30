import React from "react";
import "./CharityComponent.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { charity, charitySocialMediaLinks } from "../../portfolio";
// import { Fade } from "react-reveal";
import { motion } from 'framer-motion';

export default function CharityComponent(props) {
  const theme = props.theme;
  console.log(props);
  console.log(theme.text);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="charity-main" id="charity">
        <h1 className="charity-title">CAFALL Charity</h1>
        <div className="charity-image-div">
          <img
            className=""
            src={new URL(`../../assests/images/logo.png`, import.meta.url).href}
            alt=""
          />
        </div>
        <p className="charity-description">{charity.description}</p>
        <div className="button-charity-div">
          <SocialMedia theme={theme} links={charitySocialMediaLinks} />
          {/* <Button
            text="Instagram"
            newTab={true}
            // href={greeting.portfolio_repository}
            theme={theme}
            className="portfolio-repo-btn"
          />
          <Button
            text="TikTok"
            newTab={true}
            // href={greeting.resumeLink}
            theme={theme}
            className="portfolio-repo-btn"
            style={{ marginLeft: "1rem" }}
          />
          <Button
            text="TikTok"
            newTab={true}
            // href={greeting.resumeLink}
            theme={theme}
            className="portfolio-repo-btn"
            style={{ marginLeft: "1rem" }}
          /> */}
        </div>
      </div>
    </motion.div>
  );
}
