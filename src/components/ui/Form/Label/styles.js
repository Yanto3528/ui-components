import styled from "styled-components";

export const FormLabel = styled.label`
  font-weight: 600;
  > span {
    display: inline-block;
    margin-bottom: 3px;
  }
  > div {
    position: relative;
    > svg {
      fill: ${({ theme }) => theme.lightgrey};
      position: absolute;
      top: 50%;
      right: 15px;
      transform: translateY(-50%);
    }
  }
`;
