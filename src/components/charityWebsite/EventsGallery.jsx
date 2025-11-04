import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { charity } from '../../portfolio';

const EventsGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadedImages, setLoadedImages] = useState(new Set());

  // Get gallery images from portfolio data or use default
  const galleryImages = charity.gallery || [];

  useEffect(() => {
    // Preload first few images
    galleryImages.slice(0, 6).forEach((item) => {
      const img = new Image();
      img.src = `/images/${item.image}`;
    });
  }, [galleryImages]);

  const handleImageLoad = (imagePath) => {
    setLoadedImages((prev) => new Set([...prev, imagePath]));
  };

  const openLightbox = (image, index) => {
    setSelectedImage({ image, index });
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction) => {
    if (!selectedImage) return;
    const currentIndex = selectedImage.index;
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % galleryImages.length;
    } else {
      newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    }
    setSelectedImage({ image: galleryImages[newIndex], index: newIndex });
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigateImage('next');
      if (e.key === 'ArrowLeft') navigateImage('prev');
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage]);

  return (
    <section id="events-gallery" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Events Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our journey through impactful events and community initiatives
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((item, index) => (
            <motion.div
              key={`${item.image}-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => openLightbox(item, index)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              
              {!loadedImages.has(`/images/${item.image}`) && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                  <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" />
                </div>
              )}

              <img
                src={`/images/${item.image}`}
                alt={item.title || `Event image ${index + 1}`}
                className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  loadedImages.has(`/images/${item.image}`) ? 'opacity-100' : 'opacity-0'
                }`}
                loading="lazy"
                onLoad={() => handleImageLoad(`/images/${item.image}`)}
              />

              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                {item.location && (
                  <p className="text-white/80 text-xs">📍 {item.location}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg p-2 z-50"
                aria-label="Close lightbox"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('prev');
                }}
                className="absolute left-4 text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg p-2 z-50"
                aria-label="Previous image"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
                className="absolute right-4 text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg p-2 z-50"
                aria-label="Next image"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Image */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-7xl max-h-[90vh]"
              >
                <img
                  src={`/images/${selectedImage.image.image}`}
                  alt={selectedImage.image.title || 'Event image'}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg"
                />
                
                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    {selectedImage.image.title}
                  </h3>
                  {selectedImage.image.location && (
                    <p className="text-white/80">📍 {selectedImage.image.location}</p>
                  )}
                  <p className="text-white/60 text-sm mt-2">
                    {selectedImage.index + 1} of {galleryImages.length}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default EventsGallery;
