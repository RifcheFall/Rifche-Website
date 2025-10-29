import React, { Component } from "react";
import "./CertificationCard.css";
// import { Fade } from "react-reveal";
import { motion } from 'framer-motion';

class CertificationCard extends Component {
  render() {
    const certificate = this.props.certificate;
    const theme = this.props.theme;
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <div
          className="cert-card"
          style={{
            border: `1px solid ${theme.shadow}`,
            boxShadow: `5px 5px 5px ${theme.shadow}`,
          }}
        >
          <div className="content">
            <a
              // href={certificate.certificate_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <div className="content-overlay"></div> */}
              <div
                className="cert-header"
                style={{ backgroundColor: "transparent" }}
              >
                <img
                  className="logo_img"
                  src={new URL(`../../assests/images/${certificate.logo_path}`, import.meta.url).href}
                  alt={certificate.alt_name}
                />
              </div>
              <div className="content-details fadeIn-top">
                <h3
                  className="content-title"
                  style={{ color: theme.secondarytext }}
                >
                  Certificate
                </h3>
              </div>
            </a>
          </div>
          <div className="cert-body">
            <h2 className="cert-body-title" style={{ color: theme.text }}>
              {certificate.title}
            </h2>
            <h3
              className="cert-body-subtitle"
              style={{ color: theme.secondaryText }}
            >
              {certificate.subtitle}
            </h3>
          </div>
        </div>
      </motion.div>
    );
  }
}

export default CertificationCard;
