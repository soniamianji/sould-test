import styled from "styled-components";

export const Grid = styled.div``;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  text-align: ${(props) => props.textAlign};
  max-width: ${(props) => props.maxWidth};
  @media (min-width: 550px) {
    flex-flow: wrap;
    justify-content: flex-start;
  }
  @media (min-width: 784px) {
    flex-direction: row;
    margin: auto;
    text-align: left;
  }
`;

export const Col = styled.div`
  flex: ${(props) => props.size};
  border-radius: 5px;
  padding: 0.5em;
  height: ${(props) => props.height};
`;
