import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "../../config/girdSytem";
import UspCol from "./UspCol";

const UspSection = styled.section`
  background-color: ${(props) => props.theme.regalGray};
  padding: 3rem;
  display: flex;
  flex-direction: column;
`;
const UpsText = styled.div`
  color: ${(props) => props.theme.mainBlue};
  padding: 3rem;
  max-width: 782px;
  margin: auto;
`;
const UpsHeader = styled.h3`
  font-familiy: ${(props) => props.theme.headerFontFamiliy};
  font-weight: 300;
  font-size: 30px;
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
          <Row maxWidth={"782px"} height={"230px"}>
            <Col size={3}>
              <UspCol />
            </Col>
            <Col size={3}>
              <UspCol />
            </Col>
            <Col size={3}>
              <UspCol />
            </Col>
          </Row>
          <Row maxWidth={"782px"}>
            <Col>
              <UspCol />
            </Col>
            <Col>
              <UspCol />
            </Col>
            <Col>
              <UspCol />
            </Col>
          </Row>
        </Grid>
      </UpsText>
    </UspSection>
  );
};

export default SellingPointSection;
