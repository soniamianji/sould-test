import React, { Component } from "react";
import rawMemberData from "../../rawMemberData";
import Member from "./Member";
import "../../App.css";
import styled from "styled-components";
import MemberName from "./MemeberName";

class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = { memberData: rawMemberData };
  }
  render() {
    const MainSlide = styled.span`
      ${(props) => {
        if (props.activeIndex === this.props.activeIndex) {
          return "display: block;";
        } else {
          return " display: none;max-width: 900px;text-align: center;";
        }
      }}
    `;
    return (
      <section>
        {this.state.memberData.map((member, index) => (
          <MainSlide activeIndex={index}>
            <Member memberImg={member.image} />
            <MemberName name={member.name} />
          </MainSlide>
        ))}
      </section>
    );
  }
}
export default Slide;
