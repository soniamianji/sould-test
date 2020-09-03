import React from "react";
import styled from "styled-components";
import UspOfferings from "./UspOfferings";

const UspSection = styled.section`
  background-color: ${(props) => props.theme.regalGray};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  @media (min-width: ${(props) => props.theme.mobileBreakPoint}) {
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

  &:last-child {
    margin-bottom: 3rem;
  }
  @media (min-width: ${(props) => props.theme.mobileBreakPoint}) {
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
        <UspOfferings />
      </UpsText>
    </UspSection>
  );
};

export default SellingPointSection;
