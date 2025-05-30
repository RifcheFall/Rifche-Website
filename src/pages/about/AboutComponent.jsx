import React, { Component } from "react";
import Header from "../../components/header/Header";
import AboutMe from "../../containers/aboutMe/AboutMe";
import Skills from "../../containers/skills/Skills";
import TopButton from "../../components/topButton/TopButton";

class About extends Component {
  render() {
    console.log(this.props.theme);
    return (
      <div>
        <Header theme={this.props.theme} />
        <AboutMe theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default About;
