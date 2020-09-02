import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  text-align: center;
  flex-wrap: wrap;
  padding: 1rem;
  color: ${(props) => props.theme.mainBlue};
  @media (min-width: 768px) {
    display: flex;
    padding: 1.4rem 7.8125vw;
  }
`;
const FooterInfo = styled.div`
  width: 100%;
  justify-content: center;
  margin-bottom: 1rem;
  font-size: 1rem;
  margin: auto auto 1rem;
  font-family: ${(props) => props.theme.headerFontFamily};
  @media (min-width: 768px) {
    width: 33.33%;
    margin: 0;
  }
`;
const FooterParag = styled.p`
  text-align: center;
  font-size: 1rem;
  margin: 0;
  font-family: ${(props) => props.theme.headerFontFamily};
`;
const FooterLink = styled.a`
  text-decoration: none;
  margin-right: 0.5em;
  &:hover {
    color: ${(props) => props.theme.regalBlue};
    cursor: pointer;
  }
  @media (min-width: 768px) {
    display: block;
  }
`;
const Footer = () => {
  return (
    <FooterWrapper>
      <FooterInfo justifyContent={"flex-start"}>
        <FooterParag>Copyright Företag 2020</FooterParag>
        <FooterParag>info@foretag.se</FooterParag>
      </FooterInfo>
      <FooterInfo>
        <FooterLink>Företag.se</FooterLink>
        <FooterLink>LinkedIn</FooterLink>
        <FooterLink>Instagram</FooterLink>
      </FooterInfo>
      <FooterInfo>
        <FooterLink>Integritetpolicy</FooterLink>
      </FooterInfo>
    </FooterWrapper>
  );
};

export default Footer;
