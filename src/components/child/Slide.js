import React from "react";
import rawMemberData from "../../rawMemberData";
import Member from "./Member";
import "../../App.css";
import styled from "styled-components";
import MemberName from "./MemeberName";

function Slide(props) {
  const MainSlide = styled.span`
    ${(prop) => {
      if (prop.activeIndex === props.activeIndex) {
        return "display: block;";
      } else {
        return " display: none;max-width: 900px;text-align: center;";
      }
    }}
  `;
  return (
    <section>
      {rawMemberData.map((member, index) => (
        <MainSlide activeIndex={index} key={index}>
          <Member memberImg={member.image} />
          <MemberName name={member.name} />
        </MainSlide>
      ))}
    </section>
  );
}

export default Slide;
