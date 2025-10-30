import React from "react";
import "./skillLanguage.css";
import { sLanguage } from "../../portfolio";
import { motion } from 'framer-motion';

export default function SkillLanguage(props) {
  if (sLanguage.viewSkillBars) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="lskills-heading">
          <h1>Programming Languages / Frameworks</h1>
        </div>
        <div className="lskills-container">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="lskills-bar">
              {sLanguage.experience
                .slice(0, Math.ceil(sLanguage.experience.length / 2))
                .map((exp) => {
                  const progressStyle = {
                    width: exp.progressPercentage,
                  };
                  return (
                    <div className="lskill">
                      <p>{exp.Stack}</p>
                      <div className="lmeter">
                        <span style={progressStyle}></span>
                      </div>
                    </div>
                  );
                })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="lskills-bar">
              {sLanguage.experience
                .slice(Math.ceil(sLanguage.experience.length / 2))
                .map((exp) => {
                  const progressStyle = {
                    width: exp.progressPercentage,
                  };
                  return (
                    <div className="lskill">
                      <p>{exp.Stack}</p>
                      <div className="lmeter">
                        <span style={progressStyle}></span>
                      </div>
                    </div>
                  );
                })}
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
  }
  return null;
}
