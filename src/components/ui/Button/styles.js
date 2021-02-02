import styled, { css } from "styled-components";

import { getColor, getRadius } from "../../../utils";

const outlineStyles = css`
  background: transparent;
  color: ${({ theme, color }) => getColor(theme, color)};
  &:hover:not(:disabled) {
    background-color: ${({ theme, color }) => getColor(theme, color)};
    color: white;
    .loading-icon {
      border-color: white;
      border-top-color: transparent;
    }
  }
  .loading-icon {
    border-color: ${({ theme, color }) => getColor(theme, color)};
    border-top-color: transparent;
  }
`;

export default styled.button`
  width: ${({ fluid, width }) => (fluid ? "100%" : width)};
  outline: none;
  border: 1px solid ${({ theme, color }) => getColor(theme, color)};
  border-radius: ${getRadius};
  padding: ${({ padding }) => (padding ? padding : "10px 35px")};
  color: ${({ theme }) => theme.white};
  font-weight: bold;
  display: inline-block;
  cursor: pointer;
  transition: all 0.4s;
  background-color: ${({ theme, color }) => getColor(theme, color)};
  &:hover {
    opacity: 0.9;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .loading-icon {
    border-color: white;
    border-top-color: transparent;
  }
  ${({ outline }) => outline && outlineStyles};
`;
