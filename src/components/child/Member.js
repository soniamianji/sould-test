import React, { useState, Fragment } from "react";
import styled from "styled-components";

const MemberWrapper = styled.div`
  margin: 0;
`;

const MemberImgWrapper = styled.div`
  position: relative;
  width: 8.5rem;
  height: 8.5rem;
  overflow: hidden;
  border-radius: 50%;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1));
  border: 2px solid #ffffff;
  box-sizing: border-box;
  margin: auto;
  @media (min-width: 769px) {
    flex: 0 0 96px;
    height: 96px;
    width: 96px;
    top: 55vh;
    margin: 0 11px;
    cursor: pointer;
  }
`;
const MemberImg = styled.img`
  width: 100%;
  height: auto;
`;

const MemberNameTag = styled.div`
  background-color: ${(props) => props.theme.regalGray};
  color: ${(props) => props.theme.mainBlue};
  font-size: 14px;
  width: 100px;
  margin: auto;
  border-radius: 5px;
  position: absolute;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1));
  bottom: -110px;
  padding: 0.5rem;
  margin: 1rem auto;
  text-align: center;
`;
const Member = (props) => {
  const [isShown, setNameTagShown] = useState(false);
  const showNameTag = () => {
    setNameTagShown(true);
  };
  const hideNameTag = () => {
    setNameTagShown(false);
  };
  return (
    <Fragment>
      <MemberWrapper>
        <MemberImgWrapper onMouseOver={showNameTag} onMouseLeave={hideNameTag}>
          <MemberImg src={props.memberImg} alt="member img"></MemberImg>
        </MemberImgWrapper>
        {isShown && props.memberName && (
          <MemberNameTag>{props.memberName}</MemberNameTag>
        )}
      </MemberWrapper>
    </Fragment>
  );
};

export default Member;
