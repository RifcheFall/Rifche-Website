import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CharityNavbar from '../../components/charityWebsite/CharityNavbar';
import { charity } from '../../portfolio';

const CharityWebsite = () => {
  const [activeSection, setActiveSection] = useState('about-us');
  const sectionRefs = useRef({});

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
    const element = sectionRefs.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const SectionWrapper = ({ id, children, className = '' }) => {
    useEffect(() => {
      sectionRefs.current[id] = document.getElementById(id);
    }, [id]);

    return (
      <section
        id={id}
        className={`min-h-screen pt-24 ${className}`}
        aria-labelledby={`${id}-heading`}
      >
        {children}
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <CharityNavbar activeSection={activeSection} onSectionChange={handleSectionChange} />
      
      <AnimatePresence mode="wait">
        {/* About Us Section with Our Goal */}
        {activeSection === 'about-us' && (
          <SectionWrapper key="about-us" id="about-us" className="bg-gradient-to-br from-blue-50 to-indigo-50">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto px-4 py-16"
            >
              <div className="text-center mb-12">
                <h1 id="about-us-heading" className="text-5xl font-bold text-gray-900 mb-4">
                  About Us
                </h1>
                <img
                  src="/charity-website/images/logo.png"
                  alt="CAFALL Charity Logo"
                  className="mx-auto w-48 h-48 object-contain mb-8"
                  onError={(e) => {
                    e.target.src = '/charity-website/images/placeholder.jpg';
                  }}
                />
              </div>

              <div className="prose prose-lg max-w-none mb-16">
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  {charity.description}
                </p>
              </div>

              {/* Our Goal Subsection */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mt-12"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
                  Our Goal
                </h2>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    Our mission is to improve the lives of those in need by providing access to essential resources, education, sports, and more. We believe that everyone deserves the opportunity to live a healthy, fulfilling life, and we are committed to making this vision a reality.
                  </p>
                  <p>
                    We collaborate with a network of partners and supporters who share our vision and values. Together, we work to achieve our goals, leveraging collective strengths and resources to bring about positive changes in communities across Senegal and beyond.
                  </p>
                  <p>
                    Your support is crucial to our success. Whether through donations, volunteer work, or partnerships, every contribution helps us make a lasting impact. We invite you to join us in our efforts to create a better world for all.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </SectionWrapper>
        )}

        {/* Our Vision Section */}
        {activeSection === 'our-vision' && (
          <SectionWrapper key="our-vision" id="our-vision" className="bg-gradient-to-br from-purple-50 to-pink-50">
            <motion.div
              initial={{ opacity: 0, y: 21 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto px-4 py-16"
            >
              <h1 id="our-vision-heading" className="text-5xl font-bold text-center text-gray-900 mb-12">
                Our Vision
              </h1>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  We envision a world where every child has access to education, sports, and the resources they need to thrive. A world where communities are empowered and individuals can reach their full potential regardless of their circumstances.
                </p>
                <p>
                  Through our work, we aim to break down barriers, create opportunities, and foster hope in communities that need it most. We believe in the power of collective action and the transformative impact of giving back.
                </p>
              </div>
            </motion.div>
          </SectionWrapper>
        )}

        {/* Our Impacts Section */}
        {activeSection === 'our-impacts' && (
          <SectionWrapper key="our-impacts" id="our-impacts" className="bg-gradient-to-br from-green-50 to-emerald-50">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto px-4 py-16"
            >
              <h1 id="our-impacts-heading" className="text-5xl font-bold text-center text-gray-900 mb-12">
                Our Impacts
              </h1>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: 'Communities Served', value: '50+', description: 'Across Senegal and beyond' },
                  { title: 'Children Helped', value: '5000+', description: 'With education and sports resources' },
                  { title: 'Events Organized', value: '100+', description: 'Charity events and initiatives' },
                ].map((impact, index) => (
                  <motion.div
                    key={impact.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg p-6 text-center"
                  >
                    <div className="text-4xl font-bold text-primary-600 mb-2">{impact.value}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{impact.title}</h3>
                    <p className="text-gray-600">{impact.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </SectionWrapper>
        )}

        {/* Operation Team Section */}
        {activeSection === 'operation-team' && (
          <SectionWrapper key="operation-team" id="operation-team" className="bg-gradient-to-br from-orange-50 to-red-50">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto px-4 py-16"
            >
              <h1 id="operation-team-heading" className="text-5xl font-bold text-center text-gray-900 mb-12">
                Operation Team
              </h1>
              <p className="text-center text-gray-700 text-lg mb-8">
                Our dedicated team of passionate individuals working together to make a difference.
              </p>
            </motion.div>
          </SectionWrapper>
        )}

        {/* Coaches Section */}
        {activeSection === 'coaches' && (
          <SectionWrapper key="coaches" id="coaches" className="bg-gradient-to-br from-yellow-50 to-amber-50">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto px-4 py-16"
            >
              <h1 id="coaches-heading" className="text-5xl font-bold text-center text-gray-900 mb-12">
                Coaches
              </h1>
              <p className="text-center text-gray-700 text-lg">
                Our experienced coaches who mentor and guide young athletes.
              </p>
            </motion.div>
          </SectionWrapper>
        )}

        {/* Content Creators Section */}
        {activeSection === 'content-creators' && (
          <SectionWrapper key="content-creators" id="content-creators" className="bg-gradient-to-br from-cyan-50 to-blue-50">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto px-4 py-16"
            >
              <h1 id="content-creators-heading" className="text-5xl font-bold text-center text-gray-900 mb-12">
                Content Creators
              </h1>
              <p className="text-center text-gray-700 text-lg">
                Creative individuals who help share our story and mission.
              </p>
            </motion.div>
          </SectionWrapper>
        )}

        {/* Contact Us Section */}
        {activeSection === 'contact-us' && (
          <SectionWrapper key="contact-us" id="contact-us" className="bg-gradient-to-br from-gray-50 to-slate-50">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto px-4 py-16"
            >
              <h1 id="contact-us-heading" className="text-5xl font-bold text-center text-gray-900 mb-12">
                Contact Us
              </h1>
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      aria-required="true"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </SectionWrapper>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CharityWebsite;
