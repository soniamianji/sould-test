import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "../../config/girdSytem";
import offerings from "../../rawOfferingData";

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
const UspCol = () => {
  return (
    <React.Fragment>
      <Grid>
        {offerings.map((offering, i) => (
          <Row maxWidth={"782px"} textAlign={"center"} key={i}>
            <Col size={1}>
              <IconUsp src={offering[0].icon} alt="chat icon" />
              <UspDescription>{offering[0].text}</UspDescription>
            </Col>
            <Col size={1}>
              <IconUsp src={offering[1].icon} alt="chat icon" />
              <UspDescription>{offering[1].text}</UspDescription>
            </Col>
            <Col size={1}>
              <IconUsp src={offering[0].icon} alt="chat icon" />
              <UspDescription>{offering[0].text}</UspDescription>
            </Col>
          </Row>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default UspCol;
