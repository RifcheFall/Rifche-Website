import React from "react";
import "./Progress.css";
import { techStack } from "../../portfolio";
// import { Fade } from "react-reveal";
import { motion } from 'framer-motion';

export default function StackProgress(props) {
    const theme = props.theme;
    if (techStack.viewSkillBars) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
            >
                <div className="skills-container">
                    <div className="skills-bar">
                        <h1 className="skills-heading">Proficiency</h1>
                        {techStack.experience.map((exp) => {
                            const progressStyle = {
                                width: exp.progressPercentage
                            };
                            return (
                                <div className="skill">
                                    <p>{exp.Stack}</p>
                                    <div className="meter">
                                        <span style={progressStyle}></span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="skills-image">
                        <img alt="Skills" src={new URL("../../assests/images/fall.png", import.meta.url).href} />
                    </div>

                </div>
            </motion.div>
        );
    }
    return null;
}