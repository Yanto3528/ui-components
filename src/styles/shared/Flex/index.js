import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ align }) => (align ? align : "center")};
  justify-content: ${({ justify }) => (justify ? justify : "flex-start")};
  flex-wrap: ${({ wrap }) => (wrap ? "wrap" : "nowrap")};
`;
