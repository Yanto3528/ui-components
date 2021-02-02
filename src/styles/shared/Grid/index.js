import styled from "styled-components";

export const Row = styled.div`
  display: flex;
`;

export const Col = styled.div`
  background-color: lightpink;
  flex-basis: ${({ col }) => `calc(100% / (24 / ${col}))`};
`;
