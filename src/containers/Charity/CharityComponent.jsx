import React, { useState } from "react";
import "./CharityComponent.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { charity, charitySocialMediaLinks } from "../../portfolio";
import { motion } from 'framer-motion';

export default function CharityComponent(props) {
  const theme = props.theme;
  const [selectedImage, setSelectedImage] = useState(null);
  console.log(props);
  console.log(theme.text);

  const openLightbox = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="charity-main" id="charity">
        <div className="charity-back-button">
          <Button
            text="← Back to Portfolio"
            href="/"
            theme={theme}
            className="portfolio-repo-btn"
          />
        </div>
        <h1 className="charity-title">CAFALL Charity</h1>
        <div className="charity-image-div">
          <img
            className=""
            src="/charity-website/images/logo.png"
            alt="CAFALL Charity Logo"
            onError={(e) => {
              e.target.src = '/charity-website/images/placeholder.jpg';
            }}
          />
        </div>
        <p className="charity-description">{charity.description}</p>
        
        {/* Charity Gallery */}
        {charity.gallery && charity.gallery.length > 0 && (
          <div className="charity-gallery">
            {charity.gallery.map((item, index) => (
              <div className="charity-gallery-card" key={`${item.image}-${index}`}>
                <img
                  src={`/charity-website/images/${item.image}`}
                  alt={item.title || "Charity image"}
                  onClick={() => openLightbox(`/charity-website/images/${item.image}`)}
                  onError={(e) => {
                    e.target.src = '/charity-website/images/placeholder.jpg';
                  }}
                />
                <div className="charity-gallery-caption">
                  <div className="charity-caption-title">{item.title}</div>
                  {item.location && (
                    <div className="charity-caption-location">📍 {item.location}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="button-charity-div">
          <SocialMedia theme={theme} links={charitySocialMediaLinks} />
        </div>
        
        {/* Visit Website Button */}
        <div className="charity-website-button">
          <Button
            text="Visit Our Website"
            newTab={true}
            href={charity.website || "/charity-website/index.html"}
            theme={theme}
            className="portfolio-repo-btn"
          />
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              ×
            </button>
            <img src={selectedImage} alt="Full size" />
          </div>
        </div>
      )}
    </motion.div>
  );
}
