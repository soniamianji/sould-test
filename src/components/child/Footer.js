import React from "react";
import styled from "styled-components";

//hardcoded text variables
const COMPANY_EMAIL_ADDRESS = "info@foretag.se";
const COPYRIGHT_INFO = "Copyright Företag 2020";
const LINK_TO_SITE = "Företag.se";

const FooterWrapper = styled.footer`
  text-align: center;
  flex-wrap: wrap;
  padding: 1rem;
  color: ${(props) => props.theme.mainBlue};
  @media (min-width: ${(props) => props.theme.mobileBreakPoint}) {
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
  @media (min-width: ${(props) => props.theme.mobileBreakPoint}) {
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
  color: ${(props) => props.theme.regalBlue};
  &:hover {
    cursor: pointer;
  }
  @media (min-width: ${(props) => props.theme.mobileBreakPoint}) {
    display: block;
  }
`;
const Footer = () => {
  return (
    <FooterWrapper>
      <FooterInfo justifyContent={"flex-start"}>
        <FooterParag>{COPYRIGHT_INFO}</FooterParag>
        <FooterParag>{COMPANY_EMAIL_ADDRESS}</FooterParag>
      </FooterInfo>
      <FooterInfo>
        <FooterLink>{LINK_TO_SITE}</FooterLink>
        <FooterLink href="#">LinkedIn</FooterLink>
        <FooterLink href="#">Instagram</FooterLink>
      </FooterInfo>
      <FooterInfo>
        <FooterLink href="#">Integritetpolicy</FooterLink>
      </FooterInfo>
    </FooterWrapper>
  );
};

export default Footer;
