import React, { Component } from "react";
import Header from "../../components/header/Header";
import HobbiesComponent from "../../containers/Hobbies/HobbiesComponent";
import Skills from "../../containers/skills/Skills";
import TopButton from "../../components/topButton/TopButton";

class Hobbies extends Component {
  render() {
    console.log(this.props.theme);
    return (
      <div>
        <Header theme={this.props.theme} />
        <HobbiesComponent theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Hobbies;
