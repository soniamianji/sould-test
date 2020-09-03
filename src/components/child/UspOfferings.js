import React from "react";
import styled from "styled-components";

const IconUsp = styled.img`
  max-width: 40px;
  padding: 1rem 0;
`;
const UspDescription = styled.p`
  font-familiy: ${(props) => props.theme.headerFontFamiliy};
  font-weight: 300;
  font-size: ${(props) => props.theme.smFont};
  max-width: 245px;
  margin: auto;
`;
const UspCol = (props) => {
  return (
    <React.Fragment>
      <IconUsp src={props.icon} alt="chat icon" />
      <UspDescription>{props.text}</UspDescription>
    </React.Fragment>
  );
};

export default UspCol;
