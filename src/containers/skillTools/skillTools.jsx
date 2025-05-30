import React from "react";
import "./skillTools.css";
import { tools } from "../../portfolio";
// import { Fade } from "react-reveal";
import { motion } from 'framer-motion';

export default function SkillTools(props) {
  if (tools.viewSkillBars) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="tool-heading">
          <h1>Project Management Skills / Tools</h1>
        </div>
        <div className="tool-container">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="tool-bar">
              {tools.experience
                .slice(0, Math.ceil(tools.experience.length / 2))
                .map((exp) => {
                  const progressStyle = {
                    width: exp.progressPercentage,
                  };
                  return (
                    <div className="tool">
                      <p>{exp.Stack}</p>
                      <div className="tool-meter">
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
            <div className="tool-bar">
              {tools.experience
                .slice(Math.ceil(tools.experience.length / 2))
                .map((exp) => {
                  const progressStyle = {
                    width: exp.progressPercentage,
                  };
                  return (
                    <div className="tool">
                      <p>{exp.Stack}</p>
                      <div className="tool-meter">
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
