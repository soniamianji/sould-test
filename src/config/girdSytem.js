import styled from "styled-components";

export const Grid = styled.div``;

export const Row = styled.div`
  display: flex;
  max-width: ${(props) => props.maxWidth};
  margin: auto;
  height: ${(props) => props.height};
  margin-top: ${(props) => props.marginTop};
`;

export const Col = styled.div`
  flex: ${(props) => props.size};
  margin-left: ${(props) => props.marginLeft};
  margin-top: ${(props) => props.marginTop};
  border-radius: 5px;
`;
