import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "../../config/girdSytem";
import UspOfferings from "./UspOfferings";
import offerings from "../../rawOfferingData";

const UspSection = styled.section`
  background-color: ${(props) => props.theme.regalGray};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    padding: 3rem;
    display: flex;
    flex-direction: column;
  }
`;
const UpsText = styled.div`
  color: ${(props) => props.theme.mainBlue};
  padding: 0.5rem;
  max-width: 782px;
  text-align: center;

  @media (min-width: 768px) {
    padding: 3rem;
    max-width: 782px;
    margin: auto;
    text-align: left;
  }
`;
const UpsHeader = styled.h3`
  font-familiy: ${(props) => props.theme.headerFontFamiliy};
  font-weight: 300;
  font-size: ${(props) => props.theme.lgFont};
`;

const SellingPointSection = () => {
  return (
    <UspSection>
      <UpsText>
        <UpsHeader>Vi finns här för er</UpsHeader>
        <p>
          Quisquam rerum non iste dicta officia facilis. Alias rerum magnam
          molestias quisquam facilis aperiam sunt. Est magni ducimus maiores
          odit pariatur nemo illo. Qui facilis minima qui modi unde adipisci
          laborum qui.
        </p>
        <p>
          Aut mollitia eos velit ea est quas commodi. Dolor magnam quis corrupti
          voluptas illo voluptatem quo. Placeat aut est aliquam. Sunt maiores ut
          nisi. Accusamus eveniet a consectetur id repudiandae. Eligendi eum
          nostrum sed nisi accusantium rem. Non doloribus aliquam eaque.
        </p>
      </UpsText>
      <UpsText>
        <UpsHeader>Vi kan hjälpa till med:</UpsHeader>
        <Grid>
          {offerings.map((offering, i) => (
            <Row maxWidth={"782px"} textAlign={"center"}>
              <Col size={1}>
                <UspOfferings icon={offering[0].icon} text={offering[0].text} />
              </Col>
              <Col size={1}>
                <UspOfferings icon={offering[1].icon} text={offering[1].text} />
              </Col>
              <Col size={1}>
                <UspOfferings icon={offering[2].icon} text={offering[2].text} />
              </Col>
            </Row>
          ))}
        </Grid>
      </UpsText>
    </UspSection>
  );
};

export default SellingPointSection;
