import React from "react";
import styled from "styled-components";

const MainParag = styled.div`
  margin: 8rem auto 3rem;
  padding: 3rem 1rem;
  text-align: center;
  color: ${(props) => props.theme.mainBlue};
  font-family: ${(props) => props.theme.bodyFontFamily};
  font-style: normal;
  font-weight: normal;
  font-size: ${(props) => props.theme.mdFont};
  line-height: 1.75rem;
  @media (min-width: 768px) {
    max-width: 700px;
    height: 225px;
    text-align: center;
    margin: 6rem auto 2rem;
  }
`;
const IntroParag = () => {
  return (
    <MainParag>
      Quia nesciunt itaque et eos adipisci voluptate quod voluptate. Eum aut et
      nam omnis. m Eum aut et nam omnis. Sapiente sint expedita corrupti
      consequatur aut quam vel. Odio veniam harum voluptatem reprehenderit
      voluptates. Atque consectetur quo et voluptates quod laboriosam
      voluptatem. Quisquam aut quia perspiciatis possimus et consequatur. Atque
      consectetur quo et voluptates quod laboriosam voluptatem. Quisquam aut
      quia perspiciatis possimus et consequatur.
    </MainParag>
  );
};

export default IntroParag;
