import React from "react";
import styled from "styled-components";
import portrait from "../../assets/portrait.jpg";

const MemberImgHolder = styled.div`
  background-image: url(${portrait});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: top;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  border-radius: 50%;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1));
  position: relative;
  //   width: 150px;
  //   height: 150px;
  top: 40vh;
  flex: 0 0 150px;
  height: 150px;
  display: inline;
  margin-right: 10px;

  @media (min-width: 768px) {
    flex: 0 0 96px;
    height: 96px;
    top: 53vh;
    margin: 0 11px;
    left: 25%;
    transform: translate(-25%, 0);
  }
`;

const Member = () => {
  return <MemberImgHolder></MemberImgHolder>;
};

export default Member;
