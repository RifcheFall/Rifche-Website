import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
// import { Fade } from "react-reveal";
import { motion } from "framer-motion";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import AndroidImg from "./AndroidImg";
import DesignImg from "./DesignImg";

function GetSkillSvg(props) {
  if (props.fileName === "DataScienceImg")
    return <DataScienceImg theme={props.theme} />;
  else if (props.fileName === "FullStackImg")
    return <FullStackImg theme={props.theme} />;
  else if (props.fileName === "AndroidImg")
    return <AndroidImg theme={props.theme} />;
  return <DesignImg theme={props.theme} />;
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill) => {
          return (
            <div className="skills-main-div">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="skills-image-div">
                  {/* { <img
                    alt="Ashutosh is Analysing Data"
                    src={new URL(`../../assests/images/${skill.imagePath}`, import.meta.url).href}
                  ></img> } */}
                  {/* <GetSkillSvg fileName={skill.fileName} theme={theme} /> */}
                  <img src="/images/fit.jpg" alt="" />
                </div>
              </motion.div>

              <div className="skills-text-div">
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <SoftwareSkill logos={skill.softwareSkills} />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div>
                    {skill.skills.map((skillSentence) => {
                      return (
                        <p
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
