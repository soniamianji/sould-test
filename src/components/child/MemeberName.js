import React from "react";
import styled from "styled-components";

const MemberNameTag = styled.div`
  background-color: ${(props) => props.theme.regalGray};
  color: ${(props) => props.theme.mainBlue};
  font-size: ${(props) => props.theme.smFont};
  width: 10em;
  margin: auto;
  border-radius: 5px;
  padding: 0.5rem;
  margin: 1rem auto;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1));
`;

const MemeberName = (props) => {
  return <MemberNameTag>{props.name}</MemberNameTag>;
};

export default MemeberName;
