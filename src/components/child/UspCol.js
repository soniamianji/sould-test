import React from "react";
import styled from "styled-components";
import icon from "../../assets/icon.svg";

const IconUsp = styled.img`
  max-width: 40px;
`;
const UspDescription = styled.p`
  font-familiy: ${(props) => props.theme.headerFontFamiliy};
  font-weight: 300;
  font-size: 16px;
  max-width: 245px;
  margin-righ: 18px;
`;
const UspCol = () => {
  return (
    <React.Fragment>
      <IconUsp src={icon} alt="chat icon" />
      <UspDescription>
        Rådgivning och stöd kring ändrad produktion om du ställer om för att
        exempelvis producera handdesinfektion.
      </UspDescription>
    </React.Fragment>
  );
};

export default UspCol;
